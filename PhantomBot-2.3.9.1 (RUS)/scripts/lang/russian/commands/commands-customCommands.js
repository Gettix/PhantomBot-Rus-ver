$.lang.register('customcommands.add.error', 'Эта команда уже существует');
$.lang.register('customcommands.add.success', 'Команда !$1 успешно создана!');
$.lang.register('customcommands.add.usage', 'Используйте: !addcom (Команда) (Сообщение)');
$.lang.register('customcommands.add.commandtag.notfirst', '(Команда) тег должен быть в начале Кастомной команды при использовании.');
$.lang.register('customcommands.add.commandtag.invalid', '(Команда) тег для команды не существует: $1');
$.lang.register('customcommands.alias.delete.error.alias.404', 'ПодГруппа (кличка) не существует: !$1');
$.lang.register('customcommands.alias.delete.success', 'ПодГруппа (кличка) !$1 была успешно удалена!');
$.lang.register('customcommands.alias.delete.usage', 'Используйте: !delalias (Имя ПодГруппы)');
$.lang.register('customcommands.alias.error', 'Эта ПодГруппа уже существует для !$1. Удалите ее для начала.');
$.lang.register('customcommands.alias.error.target404', 'Выбранная команда не сущестует!');
$.lang.register('customcommands.add.disable', 'Это команда в данный момент отключена. Включите команду или Удалите ее, чтобы Добавить новую с таким названием.');
$.lang.register('customcommands.alias.success', 'Команда !$1 успешно сгруппирована с !$2');
$.lang.register('customcommands.alias.usage', 'Используйте: !aliascom (Название ПодГруппы) (Выполяемая команда) [необязательные параметры]');
$.lang.register('customcommands.delete.success', 'Команда !$1 успешно удалена!');
$.lang.register('customcommands.delete.usage', 'Используйте: !delcom (Команда)');
$.lang.register('customcommands.edit.404', 'Вы не можете перезаписывать/менять/удалять базовые команды.');
$.lang.register('customcommands.set.perm.error.target404', 'Команда !$1 не существует!');
$.lang.register('customcommands.set.perm.success', 'Доступ для команды: $1 установлен для группы: $2 и выше.');
$.lang.register('customcommands.set.perm.unset.success', 'Все рекурсивные разрешения для команды: $1 и любые его ПодГруппы были удалены.');
$.lang.register('customcommands.set.perm.usage', 'Используйте: !permcom (Имя Команды) (Группа id/Название). Ограничивает использование команды для зрителей с определенным уровнем разрешений.');
$.lang.register('customcommands.set.perm.404', 'Команда не найдена: $1');
$.lang.register('customcommands.set.price.error.404', 'Выберите команду, которая существует и доступна для Не-Модерации.');
$.lang.register('customcommands.set.price.error.invalid', 'Укажите действительную (Цену - Price) от 0 и выше.');
$.lang.register('customcommands.set.price.success', '(Цена - Price) для !$1 была установлена на $2 $3.');
$.lang.register('customcommands.set.price.usage', 'Используйте: !pricecom (Команда) [Доп.Команда] [Доп.Действие] (Цена - Price). Необязательно: [Доп.Команда] и [Доп.Действие]');
$.lang.register('customcommands.set.pay.error.404', 'Выберите команду, которая существует и доступна для Не-Модерации.');
$.lang.register('customcommands.set.pay.error.invalid', 'Пожалуйста, введите (Действительный платеж - payment) от 0 и выше.');
$.lang.register('customcommands.set.pay.success', '(Действительный платеж - payment) для !$1 был установлен на $2 $3.');
$.lang.register('customcommands.set.pay.usage', 'Используйте: !paycom (command) (price)');
$.lang.register('customcommands.404.no.commands', 'Кастомных команд не существует, Добавьте одну из них с помощью !addcom');
$.lang.register('customcommands.cmds', 'Доступно кастомных команд: $1');
$.lang.register('customcommands.edit.usage', 'Используйте: !editcom (Команда) (Сообщение)');
$.lang.register('customcommands.edit.success', 'Команда !$1 успешно изменена!');
$.lang.register('customcommands.touser.offline', 'Извините, но $1 похоже Off-Line!');
$.lang.register('customcommands.customapi.404', 'Команда !$1 требует параметры!');
$.lang.register('customcommands.customapijson.err', '!$1: Непредвиденная ошибка на стороне API.');
$.lang.register('customcommands.disable.usage', 'Используйте: !disablecom (Команда)');
$.lang.register('customcommands.disable.404', 'Команда не существует!');
$.lang.register('customcommands.disable.err', 'Команда уже отключена!');
$.lang.register('customcommands.disable.success', 'Команда !$1 успешно отключена!');
$.lang.register('customcommands.enable.usage', 'Используйте: !enablecom (Команда)');
$.lang.register('customcommands.enable.404', 'Команда не существует!');
$.lang.register('customcommands.enable.err', 'Команда не была отключена и не требует перезапуска!');
$.lang.register('customcommands.enable.success', 'Команда !$1 была Включена!');
$.lang.register('customcommands.botcommands', 'Доступные команды: $1');
$.lang.register('customcommands.botcommands.error', 'Укажите номер, чтобы найти страницу.');
$.lang.register('customcommands.botcommands.total', 'Всего страниц: $1 [WIKI: https://phantombot.tv/commands]');