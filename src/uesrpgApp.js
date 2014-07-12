window.UESRPG = window.UESRPG || {};
UESRPG.races = [
    {
        name: 'Altmer',
        baseStats: {
            str: 20, end: 23, ag: 23, int: 30, will: 28, prc: 25, prs: 25
        }
    },
    {
        name: 'Argonian',
        baseStats: {
            str: 25, end: 24, ag: 28, int: 27, will: 24, prc: 25, prs: 22
        }
    },
    {
        name: 'Bosmer',
        baseStats: {
            str: 21, end: 21, ag: 31, int: 25, will: 23, prc: 26, prs: 24
        }
    },
    {
        name: 'Breton',
        baseStats: {
            str: 23, end: 21, ag: 22, int: 28, will: 30, prc: 25, prs: 25
        }
    },
    {
        name: 'Dunmer',
        baseStats: {
            str: 25, end: 24, ag: 29, int: 25, will: 24, prc: 25, prs: 23
        }
    },
    {
        name: 'Colovian Imperial',
        baseStats: {
            str: 26, end: 27, ag: 24, int: 24, will: 25, prc: 25, prs: 25
        }
    },
    {
        name: 'Nibenese Imperial',
        baseStats: {
            str: 24, end: 23, ag: 23, int: 27, will: 23, prc: 25, prs: 28
        }
    },
    {
        name: 'Khajiit',
        baseStats: {
            str: 22, end: 22, ag: 29, int: 25, will: 21, prc: 28, prs: 24
        }
    },
    {
        name: 'Nord',
        baseStats: {
            str: 30, end: 28, ag: 23, int: 21, will: 24, prc: 25, prs: 23
        }
    },
    {
        name: 'Orsimer',
        baseStats: {
            str: 28, end: 30, ag: 22, int: 23, will: 24, prc: 24, prs: 22
        }
    },
    {
        name: 'Redguard',
        baseStats: {
            str: 27, end: 28, ag: 26, int: 22, will: 23, prc: 25, prs: 24
        }
    }
];
UESRPG.birthsigns = {
    warrior: [
        {
            name: 'The Warrior',
            description: 'The Warrior is the first Guardian Constellation and he protects his charges during their Seasons. The Warrior’s own season is Last Seed when his Strength is needed for the harvest. His Charges are the Lady, the Steed, and the Lord. Those born under the sign of the Warrior are skilled with weapons of all kinds, but prone to short tempers.'
        },
        {
            name: 'The Lady',
            description: 'The Lady is one of the Warrior’s Charges and her Season is Heartfire. Those born under the sign of the Lady are kind and tolerant.'
        },
        {
            name: 'The Steed',
            description: 'The Steed is one of the Warrior’s Charges, and her Season is Mid Year. Those born under the sign of the Steed are impatient and always hurrying from one place to another.'
        },
        {
            name: 'The Lord',
            description: 'The Lord’s Season is First Seed and he oversees all of Tamriel during the planting. Those born under the sign of the Lord are stronger and healthier than those born under other signs.'
        }
    ],
    mage: [
        {
            name: 'The Mage',
            description: 'The Mage is a Guardian Constellation whose Season is Rain’s Hand when magicka was first used by men. His Charges are the Apprentice, the Golem, and the Ritual. Those born under the Mage have more magicka and talent for all kinds of spellcasting, but are often arrogant and absent-minded.'
        },
        {
            name: 'The Apprentice',
            description: 'The Apprentice’s Season is Sun’s Height. Those born under the sign of the apprentice have a special affinity for magick of all kinds, but are more vulnerable to magick as well.'
        },
        {
            name: 'The Atronach',
            description: 'The Atronach (often called the Golem) is one of the Mage’s Charges. Its season is Sun’s Dusk. Those born under this sign are natural sorcerers with deep reserves of magicka, but they cannot generate magicka of their own.'
        },
        {
            name: 'The Ritual',
            description: 'The Ritual is one of the Mage’s Charges and its Season is Morning Star. Those born under this sign have a variety of abilities depending on the aspects of the moons and the Divines.'
        }
    ],
    thief: [
        {
            name: 'The Thief',
            description: 'The Thief is the last Guardian Constellation, and her Season is the darkest month of Evening Star. Her Charges are the Lover, the Shadow, and the Tower. Those born under the sign of the Thief are not typically thieves, though they take risks more often and only rarely come to harm. They will run out of luck eventually, however, and rarely live as long as those born under other signs.'
        },
        {
            name: 'The Lover',
            description: 'The Lover is one of the Thief’s Charges and her season is Sun’s Dawn. Those born under the sign of the Lover are graceful and passionate.'
        },
        {
            name: 'The Shadow',
            description: 'The Shadow’s Season is Second Seed. The Shadow grants those born under her sign the ability to hide in shadows.'
        },
        {
            name: 'The Tower',
            description: 'The Tower is one of the Thief ’s Charges and its Season is Frostfall. Those born under the sign of the Tower have a knack for finding gold and can open locks of all kinds.'
        }
    ]
};
UESRPG.campaignLevels = [
    { name: 'Low', cp: 1000 }, { name: 'Medium', cp: 2500 }, { name: 'High', cp: 5000 }, { name: 'Legendary', cp: 10000 }
];
UESRPG.skillRanks = [
    { name: 'Novice', rank: 0 },
    { name: 'Apprentice', rank: 1 },
    { name: 'Journeyman', rank: 2 },
    { name: 'Adept', rank: 3 },
    { name: 'Expert', rank: 4 },
    { name: 'Master', rank: 5 }
];

// TODO these don't need to be globally scoped
window.roll = function(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}
window.rollBirthsign = function(birthsigns) {
    var cursed = false;
    var result = roll(1,5);
    if (result == 5) {
        cursed = true;
        result = roll(1, 4);
    }

    return {
        birthsign: birthsigns[result - 1],
        starCursed: cursed
    };
}

UESRPG.Player = function() {
    this.rolls = {
        str: 0, end: 0, ag: 0, int: 0, will: 0, prc: 0, prs: 0, lk: 0
    };
    this.favoredCharacteristics = {
        str: true, end: true, ag: false, int: false, will: false, prc: false, prs: false, lk: false
    };
    this.charBuys = {
        str: 0, end: 0, ag: 0, int: 0, will: 0, prc: 0, prs: 0, lk: 0
    };
    this.race = UESRPG.races[0];
    this.birthsign = UESRPG.birthsigns.warrior[0];
    this.starCursed = false;
    this.skills = [];
}
UESRPG.Player.prototype.rollStats = function() {
    this.rollStr();
    this.rollEnd();
    this.rollAg();
    this.rollInt();
    this.rollWill();
    this.rollPrc();
    this.rollPrs();
    this.rollLk();
}
UESRPG.Player.prototype.buyCharacteristic = function(characteristic, amount) {
    this.charBuys[characteristic] += amount;
    if (this.charBuys[characteristic] < 0) {
        this.charBuys[characteristic] = 0;
    }
}
UESRPG.Player.prototype.pointsSpent = function() {
    var totalCharacteristic = function(value, buys, favored) {
        var crpSpent = 0;
        var currentValue = value - (5 * buys);
        for (var i = 0; i < buys; i++) {
            crpSpent += Math.floor(Math.floor(currentValue/10) * 100);
            currentValue += 5;
        }
        if (favored) {
            crpSpent = Math.floor(crpSpent/2);
        }
        return crpSpent;
    };

    var totalSkillCost = function(skill) {
        var crpSpent = 100;
        for (var i = 1; i <= skill.rank.rank; i++) {
            crpSpent += (100 * (i-1)) + 100;
        }
        crpSpent += (skill.specs * 100);
        crpSpent += (skill.combatStyles * 25);
        return crpSpent;
    };

    var total = totalCharacteristic(this.strength(), this.charBuys.str, this.favoredCharacteristics.str);
    total += totalCharacteristic(this.endurance(), this.charBuys.end, this.favoredCharacteristics.end);
    total += totalCharacteristic(this.agility(), this.charBuys.ag, this.favoredCharacteristics.ag);
    total += totalCharacteristic(this.intelligence(), this.charBuys.int, this.favoredCharacteristics.int);
    total += totalCharacteristic(this.willpower(), this.charBuys.will, this.favoredCharacteristics.will);
    total += totalCharacteristic(this.precision(), this.charBuys.prc, this.favoredCharacteristics.prc);
    total += totalCharacteristic(this.personality(), this.charBuys.prs, this.favoredCharacteristics.prs);
    total += totalCharacteristic(this.luck(), this.charBuys.lk, this.favoredCharacteristics.lk);

    this.skills.forEach(function(skill) {
        total += totalSkillCost(skill);
    });

    return total;
}
UESRPG.Player.prototype.addSkill = function() {
    this.skills.push({name: 'Skill', rank: UESRPG.skillRanks[0], specs: 0, combatStyles: 0});
}
UESRPG.Player.prototype.removeSkill = function(index) {
    this.skills.splice(index, 1);
}
UESRPG.Player.prototype.modifySkillLevel = function(skill, amount) {
    var newRank = skill.rank.rank + amount;
    if (newRank < 0) newRank = 0;
    if (newRank > 5) newRank = 5;

    skill.rank = UESRPG.skillRanks[newRank];
}
UESRPG.Player.prototype.modifySkillSpecs = function(skill, amount) {
    skill.specs += amount;
    if (skill.specs < 0) skill.specs = 0;
}
UESRPG.Player.prototype.modifySkillCombatStyles = function(skill, amount) {
    skill.combatStyles += amount;
    if (skill.combatStyles < 0) skill.combatStyles = 0;
}
UESRPG.Player.prototype.rollWarriorBirthsign = function() {
    var birthsign = rollBirthsign(UESRPG.birthsigns.warrior);
    this.birthsign = birthsign.birthsign;
    this.starCursed = birthsign.starCursed;
}
UESRPG.Player.prototype.rollMageBirthsign = function() {
    var birthsign = rollBirthsign(UESRPG.birthsigns.mage);
    this.birthsign = birthsign.birthsign;
    this.starCursed = birthsign.starCursed;
}
UESRPG.Player.prototype.rollThiefBirthsign = function() {
    var birthsign = rollBirthsign(UESRPG.birthsigns.thief);
    this.birthsign = birthsign.birthsign;
    this.starCursed = birthsign.starCursed;
}
UESRPG.Player.prototype.rollStr = function() {
    this.rolls.str = roll(1,10) + roll(1,10);
}
UESRPG.Player.prototype.rollEnd = function() {
    this.rolls.end = roll(1,10) + roll(1,10);
}
UESRPG.Player.prototype.rollAg = function() {
    this.rolls.ag = roll(1,10) + roll(1,10);
}
UESRPG.Player.prototype.rollInt = function() {
    this.rolls.int = roll(1,10) + roll(1,10);
}
UESRPG.Player.prototype.rollWill = function() {
    this.rolls.will = roll(1,10) + roll(1,10);
}
UESRPG.Player.prototype.rollPrc = function() {
    this.rolls.prc = roll(1,10) + roll(1,10);
}
UESRPG.Player.prototype.rollPrs = function() {
    this.rolls.prs = roll(1,10) + roll(1,10);
}
UESRPG.Player.prototype.rollLk = function() {
    this.rolls.lk = roll(1,10) + roll(1,10);
}
UESRPG.Player.prototype.strength = function() {
    return this.race.baseStats.str + this.rolls.str + (5 * this.charBuys.str);
}
UESRPG.Player.prototype.endurance = function() {
    return this.race.baseStats.end + this.rolls.end + (5 * this.charBuys.end);
}
UESRPG.Player.prototype.agility = function() {
    return this.race.baseStats.ag + this.rolls.ag + (5 * this.charBuys.ag);
}
UESRPG.Player.prototype.intelligence = function() {
    return this.race.baseStats.int + this.rolls.int + (5 * this.charBuys.int);
}
UESRPG.Player.prototype.willpower = function() {
    return this.race.baseStats.will + this.rolls.will + (5 * this.charBuys.will);
}
UESRPG.Player.prototype.precision = function() {
    return this.race.baseStats.prc + this.rolls.prc + (5 * this.charBuys.prc);
}
UESRPG.Player.prototype.personality = function() {
    return this.race.baseStats.prs + this.rolls.prs + (5 * this.charBuys.prs);
}
UESRPG.Player.prototype.luck = function() {
    return this.rolls.lk + 35 + (5 * this.charBuys.lk);
}

console.log('starting app');
var app = angular.module('uesrpgApp', []);

app.controller('CharSheetController', function($scope) {
    $scope.races = UESRPG.races;
    $scope.characteristics = ['str', 'end', 'ag', 'int', 'will', 'prc', 'prs', 'lk'];
    $scope.birthsigns = UESRPG.birthsigns;
    $scope.player = new UESRPG.Player();

    $scope.campaignLevels = UESRPG.campaignLevels;
    $scope.campaignLevel = $scope.campaignLevels[0];

    $scope.rollStats = function() {
        $scope.player.rollStatus();
    }
});
