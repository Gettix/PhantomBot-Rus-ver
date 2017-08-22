$.lang.register('adventuresystem.adventure.usage', 'Используйте: !adventure [$1].');
$.lang.register('adventuresystem.alreadyjoined', 'Вы уже присоединились к Приключению!');
$.lang.register('adventuresystem.completed', 'Приключение закончилось! Выжившие: $1.');
$.lang.register('adventuresystem.completed.no.win', 'Приключение закончилось! Выживших нет! Все погибли.');
$.lang.register('adventuresystem.completed.win.total', 'Приключение закончилось! Выжило: $1 / Погибло: $2');
$.lang.register('adventuresystem.join.bettoohigh', 'Вы не можете присоединиться к $1, Максимум нужно: $2.');
$.lang.register('adventuresystem.join.bettoolow', 'Вы не можете присоединиться к $1, Минимум нужно: $2.');
$.lang.register('adventuresystem.join.needpoints', 'Вы не можете присоединиться к $1, Не хватает очков: $2.');
$.lang.register('adventuresystem.join.notpossible', 'Вы не можете присоединиться сейчас.');
$.lang.register('adventuresystem.join.success', 'Вы присоединились к Приключению $1!');
$.lang.register('adventuresystem.loaded', 'Loaded adventure stories (Найдено: $1).');
$.lang.register('adventuresystem.payoutwhisper', 'Adventure completed, $1 + $2 has been added to your balance.');
$.lang.register('adventuresystem.runstory', 'Приключение "$1" началось с $2 путешествинниками.');
$.lang.register('adventuresystem.set.success', 'Установлено $1 на $2.');
$.lang.register('adventuresystem.set.usage', 'Используйте: !adventure set [Название] [Стоимость].');
$.lang.register('adventuresystem.start.success', '$1 пытается собрать команду для похода к Приключениям! Используйте "!adventure [$2]" чтобы присоединиться!');
$.lang.register('adventuresystem.tamagotchijoined', '$1 также присоединяется к Приключениям.');
$.lang.register('adventuresystem.top5', 'Топ 5 Путешествинников: $1.');
$.lang.register('adventuresystem.top5.empty', 'Топ путешествинников пуст! Попробуйте позже.');


$.lang.register('adventuresystem.stories.1.title', 'Ограбление');
$.lang.register('adventuresystem.stories.1.chapter.1', 'Ваша память расплывчата! На столе стоит ноутбук где играет видео: "Мое имя Архитектор. Банк Karabraxos имеет лучшую защиту в мире. Вы должны ограбить этот банк любой ценой!"');
$.lang.register('adventuresystem.stories.1.chapter.2', 'Невозможно оставить свой разум пустым, (caught) медленно чувствуют, что их ум истощается, когда Теллер питается их мыслями.');
$.lang.register('adventuresystem.stories.1.chapter.3', 'Мы возвращаемся в комнату, в которой мы начали, как сознание (survivors) медленно исчезает снова, только чтобы проснуться в наших кроватях, как ничего не случилось.');

$.lang.register('adventuresystem.stories.2.title', 'Ловушка');
$.lang.register('adventuresystem.stories.2.chapter.1', 'Друзья! У меня есть координаты секретных артефактов, спрятанных в недрах эльфийского леса. !');
$.lang.register('adventuresystem.stories.2.chapter.2', 'Что это? Медвежья ловушка! (caught) попались в нее!');
$.lang.register('adventuresystem.stories.2.chapter.3', 'Черт, Это был тесный призыв к потере ноги. Но вы заслужили это (survivors)!');

//$.lang.register('adventuresystem.stories.3.title', 'Вампиры?!');
//$.lang.register('adventuresystem.stories.3.chapter.1', 'Ah, my dear friends! I may have found the adventure of a lifetime. Namely the house of count Dracula is believed to be the bolts master! I\'m for going now!');
//$.lang.register('adventuresystem.stories.3.chapter.2', 'It\'s him! (caught) got slaughtered violently!');
//$.lang.register('adventuresystem.stories.3.chapter.3', 'That was a close call, I don\'t think I\'ve been bitten. you? Ow well, (survivors), here\'s your share! ~Transforms into a bat and flutters off~');

//$.lang.register('adventuresystem.stories.4.title', 'Cereal');
//$.lang.register('adventuresystem.stories.4.chapter.1', 'I think we have a much bigger thread on our hands than the cave in... It is half man, half bear, half pig... Don\'t Laugh, I\'M SUPER CEREAL!');
//$.lang.register('adventuresystem.stories.4.chapter.2', '/me As the adventurers work their way through the tunnels they hear a soft noise from behind them...');
//$.lang.register('adventuresystem.stories.4.chapter.3', 'Look out! It\'s ManBearPig! (caught) get dragged of into the darkness.');
//$.lang.register('adventuresystem.stories.4.chapter.4', '(survivors) run away. Let\'s get out of here guys! We can\'t deal with this alone');


/*
 * Rules on writing your own adventure story:
 *
 * - Stories are automatically loaded from this file by their sequence number (adventuresystem.stories.[This number]).
 * - Keep the format of your story as shown above.
 * - There can be an unlimited number of stories, IF you keep their subsequence numbers 1, 2, 3, 4, 5...
 * - A story must have a title.
 * - A story can have an unlimited number of chapters, IF you keep their subsequence numbers 1, 2, 3, 4, 5...
 * - Stories are picked at random.
 *
 ** Game specific story how-to. You also need to make sure that you at least have ONE story that doesn't require a specific game.
 ** Please make sure that your story number also follow along. What I mean by that is it needs to start from 1 and go up. Same with the chapters.
 * - Add $.lang.register('adventuresystem.stories.NUMBER.game', 'GAME NAME IN LOWER CASE'); on top of the story chapter.

 * Example >
 * $.lang.register('adventuresystem.stories.5.game', 'programming');
 * $.lang.register('adventuresystem.stories.5.title', 'Talk Shows');
 * $.lang.register('adventuresystem.stories.5.chapter.1', 'random story...');
 *
 * Underneath is a template for your first custom story, just remove the preceding slashes.
 */

//$.lang.register('adventuresystem.stories.5.title', '');
//$.lang.register('adventuresystem.stories.5.chapter.1', '');
//$.lang.register('adventuresystem.stories.5.chapter.2', '');
//$.lang.register('adventuresystem.stories.5.chapter.3', '');
