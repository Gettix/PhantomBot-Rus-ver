/**
 * cleanupSystem.js
 *
 * A module that enables channel owners to clean the bot's database.
 */
(function() {
    var logName = 'cleanUpSystem',
        running = false;

    function cleanUp(table, amount, sender) {
        if (table.equalsIgnoreCase('time')) {
            var keys = $.inidb.GetKeyList('time', ''),
                time = parseInt(amount),
                count = 0,
                i;

            $.consoleLn('>>> Процесс начинается, это может занять несколько минут...');
            running = true;
            for (i in keys) {
                if (parseInt($.inidb.get('time', keys[i])) <= time) {
                    $.consoleLn('>> Удаляем ' + keys[i] + ' из таблицы времени с ' + $.inidb.get('time', keys[i]) + ' временем.');
                    $.inidb.del('time', keys[i]);
                    count++;
                }
            }
            $.consoleLn('> Выполнено. ' + count + ' пользователей было удалено из таблицы времени.');
            $.log.file(logName, '' + 'Запущена Очистка таблицы времени. Кто: ' + sender + '. (Удалено ' + count + ' пользователей из таблицы времени)');
            running = false;
            return;
        }

        if (table.equalsIgnoreCase('points')) {
            var keys = $.inidb.GetKeyList('points', ''),
                points = parseInt(amount),
                count = 0,
                i;

            $.consoleLn('>>> Процесс начинается, это может занять несколько минут...');
            running = true;
            for (i in keys) {
                if (parseInt($.inidb.get('points', keys[i])) <= points) {
                    $.consoleLn('>> Удаляем ' + keys[i] + ' из таблицы Points (очков) с ' + $.inidb.get('points', keys[i]) + ' очков.');
                    $.inidb.del('points', keys[i]);
                    count++;
                }
            }
            $.consoleLn('> Выполнено. ' + count + ' пользователей было удалено из таблицы Points (очков).');
            $.log.file(logName, '' + 'Запущена Очистка таблицы Points (очков). Кто: ' + sender + '. (Удалено ' + count + ' пользователей из таблицы Points (очков) )');
            running = false;
            return;
        }

        if (table.equalsIgnoreCase('all')) {
            var keys = $.inidb.GetKeyList('visited', ''),
                time = parseInt(amount),
                count = 0,
                t,
                i;

            $.consoleLn('>>> Процесс начинается, это может занять несколько минут...');
            running = true;
            for (i in keys) {
                t = ($.inidb.exists('time', keys[i]) ? parseInt($.inidb.get('time', keys[i])) : 0);
                if (t <= time) {
                    $.inidb.del('time', keys[i]);
                    $.inidb.del('points', keys[i]);
                    $.inidb.del('heistPayouts', keys[i]);
                    $.inidb.del('lastseen', keys[i]);
                    $.inidb.del('followed', keys[i]);
                    $.inidb.del('visited', keys[i]);
                    $.consoleLn('>> Удаляем ' + keys[i] + ' из Базы Данных.');
                    count++;
                }
            }
            $.consoleLn('> Выполнено. ' + count + ' пользователей было удалено из Базы Данных.');
            $.log.file(logName, '' + 'Запущена Очистка. Кто: ' + sender + '. (Удалено ' + count + ' пользователей из Базы Данных)');
            running = false;
            return;
        }
        $.log.error('Команда: cleanup [time / points / all] [Время в секундах или points (очки) если чистим points (очки)]');
    };

    /**
     * @event command
     */
    $.bind('command', function(event) {
        var sender = event.getSender().toLowerCase(),
            command = event.getCommand(),
            args = event.getArgs(),
            action = args[0],
            subAction = parseInt(args[1]);

        /**
         * @commandpath cleanup time [amount in seconds] - Will remove users from the times table with less then the seconds you chose.
         * @commandpath cleanup points [amount of points] - Will remove users from the points table with less then the points you chose.
         * @commandpath cleanup all [time in seconds] - Will remove users from all the db tables with less then the seconds you chose.
         */
        if (command.equalsIgnoreCase('cleanup') && !running) {
            if (!action || !subAction) {
                $.say($.whisperPrefix(sender) + $.lang.get('cleanupsystem.run.usage'));
                return;
            }

            $.say($.whisperPrefix(sender) + $.lang.get('cleanupsystem.run.progress', $.botName));
            cleanUp(action, subAction, sender);
            $.say($.whisperPrefix(sender) + $.lang.get('cleanupsystem.run.success'));
        }
    });

    /**
     * @event initReady
     */
    $.bind('initReady', function() {
        $.registerChatCommand('./systems/cleanupSystem.js', 'cleanup', 1);
    });
})();
