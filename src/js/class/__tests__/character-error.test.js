import Character from '../character';

test(('Character error name'), () => {
  expect(() => new Character('o', 'Daemon')).toThrow(new Error('Некорректное имя персонажа (длина должна быть от 2 до 10 символов)'));
});

test(('Character error type'), () => {
  expect(() => new Character('Oleg', 'Angel')).toThrow(new Error('Некорректный тип персонажа'));
});