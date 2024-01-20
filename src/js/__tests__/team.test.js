import Character from '../class/character';
import Team from '../app';

const myTeam = new Team();
const chr1 = new Character('Peter', 'Daemon');
const chr2 = new Character('Nick', 'Undead');
const chr3 = new Character('Oleg', 'Zombie');

test(('Добавление персонажа в команду (успешное)'), () => {
    myTeam.add(chr1);
    const correct = new Set([{
        name: 'Peter',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: null,
        defence: null,
    }]);

    expect(myTeam.members).toEqual(correct);
});

test(('Добавление персонажа в команду c ошибкой (повтор)'), () => {
    const result = myTeam.add(chr1);
    
    expect(result).toEqual(new Error('Такой персонаж в команде уже есть'));
});

test(('Добавление нескольких персонажей в команду (не должно быть повторов)'), () => {
    myTeam.addAll(chr1, chr2, chr3);
    const correct = new Set([
        {
            name: 'Peter',
            type: 'Daemon',
            health: 100,
            level: 1,
            attack: null,
            defence: null,
        },
        {
            name: 'Nick',
            type: 'Undead',
            health: 100,
            level: 1,
            attack: null,
            defence: null,
        },
        {
            name: 'Oleg',
            type: 'Zombie',
            health: 100,
            level: 1,
            attack: null,
            defence: null,
        }
    ]);

    expect(myTeam.members).toEqual(correct);
});

test(('Преобразование коллекеции персонажей в массив'), () => {
    const result = myTeam.toArray();
    const correct = [
        {
            name: 'Peter',
            type: 'Daemon',
            health: 100,
            level: 1,
            attack: null,
            defence: null,
        },
        {
            name: 'Nick',
            type: 'Undead',
            health: 100,
            level: 1,
            attack: null,
            defence: null,
        },
        {
            name: 'Oleg',
            type: 'Zombie',
            health: 100,
            level: 1,
            attack: null,
            defence: null,
        }
    ];

    expect(result).toEqual(correct);
});

