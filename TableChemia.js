class Element {
    symbol;
    number;
    period;
    group;
    metal;
    Valetnost = [];
    Ar;
    name;
    elUjemn;
}

class TableChemia {
    currentElement = -1;
    metal = "Metal";
    nemetal = "Nemetal";
    elements = [];
    str = ["1s", "2s", "2p", "3s", "3p", "4s", "3d", "4p", "5s", "4d", "5p", "6s", "5d", "4f", "6p", "7s", "6d", "5f", "7p"];
    numbers = [2, 2, 6, 2, 6, 2, 10, 6, 2, 10, 6, 2, 10, 14, 6, 2, 10, 14, 6];
    Level = [1, 2, 2, 3, 3, 4, 3, 4, 5, 4, 5, 6, 5, 4, 6, 7, 6, 5, 7];
    Numbers = [this.numbers.length];
    Graphics = [];

    Init()
    {
        let element = new Element();
        element.name = "Wodór";
        element.symbol = "H";
        element.number = 1;
        element.Ar = 1;
        element.group = 1;
        element.period = 1;
        element.metal = this.nemetal;
        element.elUjemn = 2.1;
        this.elements.push(element);

        element = new Element();
        element.name = "Hel";
        element.symbol = "He";
        element.number = 2;
        element.Ar = 4;
        element.group = 18;
        element.period = 1;
        element.metal = this.nemetal;
        element.elUjemn = 0;
        this.elements.push(element);

        element = new Element();
        element.name = "Lit";
        element.symbol = "Li";
        element.number = 3;
        element.Ar = 7;
        element.group = 1;
        element.period = 2;
        element.metal = this.metal;
        element.elUjemn = 1.0;
        this.elements.push(element);

        element = new Element();
        element.name = "Beryl";
        element.symbol = "Be";
        element.number = 4;
        element.Ar = 9;
        element.group = 2;
        element.period = 2;
        element.metal = this.metal;
        element.elUjemn = 1.5;
        this.elements.push(element);

        element = new Element();
        element.name = "Bor";
        element.symbol = "B";
        element.number = 5;
        element.Ar = 11;
        element.group = 13;
        element.period = 2;
        element.metal = this.nemetal;
        element.elUjemn = 2.0;
        this.elements.push(element);

        element = new Element();
        element.name = "Więgiel";
        element.symbol = "C";
        element.number = 6;
        element.Ar = 12;
        element.group = 14;
        element.period = 2;
        element.metal = this.nemetal;
        element.elUjemn = 2.5;
        this.elements.push(element);

        element = new Element();
        element.name = "Azot";
        element.symbol = "N";
        element.number = 7;
        element.Ar = 14;
        element.group = 15;
        element.period = 2;
        element.metal = this.nemetal;
        element.elUjemn = 3.0;
        this.elements.push(element);

        element = new Element();
        element.name = "Tlen";
        element.symbol = "O";
        element.number = 8;
        element.Ar = 16;
        element.group = 16;
        element.period = 2;
        element.metal = this.nemetal;
        element.elUjemn = 3.5;
        this.elements.push(element);

        element = new Element();
        element.name = "Fluor";
        element.symbol = "F";
        element.number = 9;
        element.Ar = 19;
        element.group = 17;
        element.period = 2;
        element.metal = this.nemetal;
        element.elUjemn = 4.0;
        this.elements.push(element);

        element = new Element();
        element.name = "Neon";
        element.symbol = "Ne";
        element.number = 10;
        element.Ar = 20;
        element.group = 18;
        element.period = 2;
        element.metal = this.nemetal;
        element.elUjemn = 0;
        this.elements.push(element);

        element = new Element();
        element.name = "Sód";
        element.symbol = "Na";
        element.number = 11;
        element.Ar = 23;
        element.group = 1;
        element.period = 3;
        element.metal = this.metal;
        element.elUjemn = 0.9;
        this.elements.push(element);

        element = new Element();
        element.name = "Magnez";
        element.symbol = "Mg";
        element.number = 12;
        element.Ar = 24;
        element.group = 2;
        element.period = 3;
        element.metal = this.metal;
        element.elUjemn = 1.2;
        this.elements.push(element);

        element = new Element();
        element.name = "Glin";
        element.symbol = "Al";
        element.number = 13;
        element.Ar = 27;
        element.group = 13;
        element.period = 3;
        element.metal = this.metal;
        element.elUjemn = 1.5;
        this.elements.push(element);

        element = new Element();
        element.name = "Krzem";
        element.symbol = "Si";
        element.number = 14;
        element.Ar = 28;
        element.group = 14;
        element.period = 3;
        element.metal = this.nemetal;
        element.elUjemn = 1.8;
        this.elements.push(element);

        element = new Element();
        element.name = "Fosfor";
        element.symbol = "P";
        element.number = 15;
        element.Ar = 31;
        element.group = 15;
        element.period = 3;
        element.metal = this.nemetal;
        element.elUjemn = 2.1;
        this.elements.push(element);

        element = new Element();
        element.name = "Siarka";
        element.symbol = "S";
        element.number = 16;
        element.Ar = 32;
        element.group = 16;
        element.period = 3;
        element.metal = this.nemetal;
        element.elUjemn = 2.5;
        this.elements.push(element);

        element = new Element();
        element.name = "Chlor";
        element.symbol = "Cl";
        element.number = 17;
        element.Ar = 35.5;
        element.group = 17;
        element.period = 3;
        element.metal = this.nemetal;
        element.elUjemn = 3.0;
        this.elements.push(element);

        element = new Element();
        element.name = "Argon";
        element.symbol = "Ar";
        element.number = 18;
        element.Ar = 40;
        element.group = 18;
        element.period = 3;
        element.metal = this.nemetal;
        element.elUjemn = 0;
        this.elements.push(element);

        element = new Element();
        element.name = "Potas";
        element.symbol = "K";
        element.number = 19;
        element.Ar = 39;
        element.group = 1;
        element.period = 4;
        element.metal = this.metal;
        element.elUjemn = 0.9;
        this.elements.push(element);

        element = new Element();
        element.name = "Wapń";
        element.symbol = "Ca";
        element.number = 20;
        element.Ar = 40;
        element.group = 2;
        element.period = 4;
        element.metal = this.metal;
        element.elUjemn = 1.0;
        this.elements.push(element);

        element = new Element();
        element.name = "Skand";
        element.symbol = "Sc";
        element.number = 21;
        element.Ar = 45;
        element.group = 3;
        element.period = 4;
        element.metal = this.metal;
        element.elUjemn = 1.3;
        this.elements.push(element);

        element = new Element();
        element.name = "Tytan";
        element.symbol = "Ti";
        element.number = 22;
        element.Ar = 48;
        element.group = 4;
        element.period = 4;
        element.metal = this.metal;
        element.elUjemn = 1.5;
        this.elements.push(element);

        element = new Element();
        element.name = "Wanad";
        element.symbol = "V";
        element.number = 23;
        element.Ar = 51;
        element.group = 5;
        element.period = 4;
        element.metal = this.metal;
        element.elUjemn = 1.7;
        this.elements.push(element);

        element = new Element();
        element.name = "Chrom";
        element.symbol = "Cr";
        element.number = 24;
        element.Ar = 52;
        element.group = 6;
        element.period = 4;
        element.metal = this.metal;
        element.elUjemn = 1.9;
        this.elements.push(element);

        element = new Element();
        element.name = "Mangan";
        element.symbol = "Mn";
        element.number = 25;
        element.Ar = 55;
        element.group = 7;
        element.period = 4;
        element.metal = this.metal;
        element.elUjemn = 1.7;
        this.elements.push(element);

        element = new Element();
        element.name = "Żelazo";
        element.symbol = "Fe";
        element.number = 26;
        element.Ar = 56;
        element.group = 8;
        element.period = 4;
        element.metal = this.metal;
        element.elUjemn = 1.9;
        this.elements.push(element);

        element = new Element();
        element.name = "Kobalt";
        element.symbol = "Co";
        element.number = 27;
        element.Ar = 59;
        element.group = 9;
        element.period = 4;
        element.metal = this.metal;
        element.elUjemn = 2.0;
        this.elements.push(element);

        element = new Element();
        element.name = "Nikiel";
        element.symbol = "Ni";
        element.number = 28;
        element.Ar = 59;
        element.group = 10;
        element.period = 4;
        element.metal = this.metal;
        element.elUjemn = 2.0;
        this.elements.push(element);

        element = new Element();
        element.name = "Miedz";
        element.symbol = "Cu";
        element.number = 29;
        element.Ar = 64;
        element.group = 11;
        element.period = 4;
        element.metal = this.metal;
        element.elUjemn = 1.9;
        this.elements.push(element);

        element = new Element();
        element.name = "Cynk";
        element.symbol = "Zn";
        element.number = 30;
        element.Ar = 65;
        element.group = 12;
        element.period = 4;
        element.metal = this.metal;
        element.elUjemn = 1.6;
        this.elements.push(element);

        element = new Element();
        element.name = "Gal";
        element.symbol = "Ga";
        element.number = 31;
        element.Ar = 70;
        element.group = 13;
        element.period = 4;
        element.metal = this.metal;
        element.elUjemn = 1.6;
        this.elements.push(element);

        element = new Element();
        element.name = "German";
        element.symbol = "Ge";
        element.number = 32;
        element.Ar = 73;
        element.group = 14;
        element.period = 4;
        element.metal = this.metal;
        element.elUjemn = 1.8;
        this.elements.push(element);

        element = new Element();
        element.name = "Arsen";
        element.symbol = "As";
        element.number = 33;
        element.Ar = 75;
        element.group = 15;
        element.period = 4;
        element.metal = this.nemetal;
        element.elUjemn = 2.0;
        this.elements.push(element);

        element = new Element();
        element.name = "Selen";
        element.symbol = "Se";
        element.number = 34;
        element.Ar = 79;
        element.group = 16;
        element.period = 4;
        element.metal = this.nemetal;
        element.elUjemn = 2.4;
        this.elements.push(element);

        element = new Element();
        element.name = "Brom";
        element.symbol = "Br";
        element.number = 35;
        element.Ar = 80;
        element.group = 17;
        element.period = 4;
        element.metal = this.nemetal;
        element.elUjemn = 2.8;
        this.elements.push(element);

        element = new Element();
        element.name = "Krypton";
        element.symbol = "Kr";
        element.number = 36;
        element.Ar = 84;
        element.group = 18;
        element.period = 4;
        element.metal = this.nemetal;
        element.elUjemn = 0;
        this.elements.push(element);

        element = new Element();
        element.name = "Rubid";
        element.symbol = "Rb";
        element.number = 37;
        element.Ar = 85;
        element.group = 1;
        element.period = 5;
        element.metal = this.metal;
        element.elUjemn = 0.8;
        this.elements.push(element);

        element = new Element();
        element.name = "Stront";
        element.symbol = "Sr";
        element.number = 38;
        element.Ar = 88;
        element.group = 2;
        element.period = 5;
        element.metal = this.metal;
        element.elUjemn = 1.0;
        this.elements.push(element);

        element = new Element();
        element.name = "Itr";
        element.symbol = "Y";
        element.number = 39;
        element.Ar = 89;
        element.group = 3;
        element.period = 5;
        element.metal = this.metal;
        element.elUjemn = 1.3;
        this.elements.push(element);

        element = new Element();
        element.name = "Cyrkon";
        element.symbol = "Zr";
        element.number = 40;
        element.Ar = 91;
        element.group = 4;
        element.period = 5;
        element.metal = this.metal;
        element.elUjemn = 1.4;
        this.elements.push(element);

        element = new Element();
        element.name = "Niob";
        element.symbol = "Nb";
        element.number = 41;
        element.Ar = 93;
        element.group = 5;
        element.period = 5;
        element.metal = this.metal;
        element.elUjemn = 1.6;
        this.elements.push(element);

        element = new Element();
        element.name = "Molibden";
        element.symbol = "Mo";
        element.number = 42;
        element.Ar = 96;
        element.group = 6;
        element.period = 5;
        element.metal = this.metal;
        element.elUjemn = 2.0;
        this.elements.push(element);

        element = new Element();
        element.name = "Technet";
        element.symbol = "Tc";
        element.number = 43;
        element.Ar = 98;
        element.group = 7;
        element.period = 5;
        element.metal = this.metal;
        element.elUjemn = 1.9;
        this.elements.push(element);

        element = new Element();
        element.name = "Ruten";
        element.symbol = "Ru";
        element.number = 44;
        element.Ar = 101;
        element.group = 8;
        element.period = 5;
        element.metal = this.metal;
        element.elUjemn = 2.2;
        this.elements.push(element);

        element = new Element();
        element.name = "Rod";
        element.symbol = "Rh";
        element.number = 45;
        element.Ar = 103;
        element.group = 9;
        element.period = 5;
        element.metal = this.metal;
        element.elUjemn = 2.2;
        this.elements.push(element);

        element = new Element();
        element.name = "Pallad";
        element.symbol = "Pd";
        element.number = 46;
        element.Ar = 107;
        element.group = 10;
        element.period = 5;
        element.metal = this.metal;
        element.elUjemn = 2.2;
        this.elements.push(element);

        element = new Element();
        element.name = "Srebro";
        element.symbol = "Ag";
        element.number = 47;
        element.Ar = 108;
        element.group = 11;
        element.period = 5;
        element.metal = this.metal;
        element.elUjemn = 1.9;
        this.elements.push(element);

        element = new Element();
        element.name = "Kadm";
        element.symbol = "Cd";
        element.number = 48;
        element.Ar = 112;
        element.group = 12;
        element.period = 5;
        element.metal = this.metal;
        element.elUjemn = 1.7;
        this.elements.push(element);

        element = new Element();
        element.name = "Ind";
        element.symbol = "In";
        element.number = 49;
        element.Ar = 115;
        element.group = 13;
        element.period = 5;
        element.metal = this.metal;
        element.elUjemn = 1.7;
        this.elements.push(element);

        element = new Element();
        element.name = "Cyna";
        element.symbol = "Sn";
        element.number = 50;
        element.Ar = 119;
        element.group = 14;
        element.period = 5;
        element.metal = this.metal;
        element.elUjemn = 1.8;
        this.elements.push(element);

        element = new Element();
        element.name = "Antymon";
        element.symbol = "Sb";
        element.number = 51;
        element.Ar = 122;
        element.group = 15;
        element.period = 5;
        element.metal = this.nemetal;
        element.elUjemn = 1.9;
        this.elements.push(element);

        element = new Element();
        element.name = "Tellur";
        element.symbol = "Te";
        element.number = 52;
        element.Ar = 128;
        element.group = 16;
        element.period = 5;
        element.metal = this.nemetal;
        element.elUjemn = 2.1;
        this.elements.push(element);

        element = new Element();
        element.name = "Jod";
        element.symbol = "I";
        element.number = 53;
        element.Ar = 127;
        element.group = 17;
        element.period = 5;
        element.metal = this.nemetal;
        element.elUjemn = 2.5;
        this.elements.push(element);

        element = new Element();
        element.name = "Ksenon";
        element.symbol = "Xe";
        element.number = 54;
        element.Ar = 131;
        element.group = 18;
        element.period = 5;
        element.metal = this.nemetal;
        element.elUjemn = 0;
        this.elements.push(element);

        element = new Element();
        element.name = "Cez";
        element.symbol = "Cs";
        element.number = 55;
        element.Ar = 133;
        element.group = 1;
        element.period = 6;
        element.metal = this.metal;
        element.elUjemn = 0.7;
        this.elements.push(element);

        element = new Element();
        element.name = "Bar";
        element.symbol = "Ba";
        element.number = 56;
        element.Ar = 137;
        element.group = 2;
        element.period = 6;
        element.metal = this.metal;
        element.elUjemn = 0.9;
        this.elements.push(element);

        element = new Element();
        element.name = "Lantan";
        element.symbol = "La";
        element.number = 57;
        element.Ar = 139;
        element.group = 3;
        element.period = 6;
        element.metal = this.metal;
        element.elUjemn = 1.1;
        this.elements.push(element);

        element = new Element();
        element.name = "Cer";
        element.symbol = "Ce";
        element.number = 58;
        element.Ar = 140;
        element.group = 3;
        element.period = 6;
        element.metal = this.metal;
        element.elUjemn = 1.1;
        this.elements.push(element);

        element = new Element();
        element.name = "Prazeodym";
        element.symbol = "Pr";
        element.number = 59;
        element.Ar = 141;
        element.group = 3;
        element.period = 6;
        element.metal = this.metal;
        element.elUjemn = 1.1;
        this.elements.push(element);

        element = new Element();
        element.name = "Neodym";
        element.symbol = "Nd";
        element.number = 60;
        element.Ar = 144;
        element.group = 3;
        element.period = 6;
        element.metal = this.metal;
        element.elUjemn = 1.2;
        this.elements.push(element);

        element = new Element();
        element.name = "Promet";
        element.symbol = "Pm";
        element.number = 61;
        element.Ar = 145;
        element.group = 3;
        element.period = 6;
        element.metal = this.metal;
        element.elUjemn = 1.2;
        this.elements.push(element);

        element = new Element();
        element.name = "Samar";
        element.symbol = "Sm";
        element.number = 62;
        element.Ar = 150;
        element.group = 3;
        element.period = 6;
        element.metal = this.metal;
        element.elUjemn = 1.2;
        this.elements.push(element);

        element = new Element();
        element.name = "Europ";
        element.symbol = "Eu";
        element.number = 63;
        element.Ar = 152;
        element.group = 3;
        element.period = 6;
        element.metal = this.metal;
        element.elUjemn = 1.0;
        this.elements.push(element);

        element = new Element();
        element.name = "Gadolin";
        element.symbol = "Gd";
        element.number = 64;
        element.Ar = 157;
        element.group = 3;
        element.period = 6;
        element.metal = this.metal;
        element.elUjemn = 1.1;
        this.elements.push(element);

        element = new Element();
        element.name = "Terb";
        element.symbol = "Tb";
        element.number = 65;
        element.Ar = 159;
        element.group = 3;
        element.period = 6;
        element.metal = this.metal;
        element.elUjemn = 1.2;
        this.elements.push(element);

        element = new Element();
        element.name = "Dysproz";
        element.symbol = "Dy";
        element.number = 66;
        element.Ar = 163;
        element.group = 3;
        element.period = 6;
        element.metal = this.metal;
        element.elUjemn = 1.2;
        this.elements.push(element);

        element = new Element();
        element.name = "Holm";
        element.symbol = "Ho";
        element.number = 67;
        element.Ar = 165;
        element.group = 3;
        element.period = 6;
        element.metal = this.metal;
        element.elUjemn = 1.2;
        this.elements.push(element);

        element = new Element();
        element.name = "Erb";
        element.symbol = "Er";
        element.number = 68;
        element.Ar = 167;
        element.group = 3;
        element.period = 6;
        element.metal = this.metal;
        element.elUjemn = 1.2;
        this.elements.push(element);

        element = new Element();
        element.name = "Tul";
        element.symbol = "Tm";
        element.number = 69;
        element.Ar = 169;
        element.group = 3;
        element.period = 6;
        element.metal = this.metal;
        element.elUjemn = 1.2;
        this.elements.push(element);

        element = new Element();
        element.name = "Iterb";
        element.symbol = "Yb";
        element.number = 70;
        element.Ar = 173;
        element.group = 3;
        element.period = 6;
        element.metal = this.metal;
        element.elUjemn = 1.1;
        this.elements.push(element);

        element = new Element();
        element.name = "Lutet";
        element.symbol = "Lu";
        element.number = 71;
        element.Ar = 175;
        element.group = 3;
        element.period = 6;
        element.metal = this.metal;
        element.elUjemn = 1.2;
        this.elements.push(element);

        element = new Element();
        element.name = "Hafn";
        element.symbol = "Hf";
        element.number = 72;
        element.Ar = 178;
        element.group = 4;
        element.period = 6;
        element.metal = this.metal;
        element.elUjemn = 1.3;
        this.elements.push(element);

        element = new Element();
        element.name = "Tantal";
        element.symbol = "Ta";
        element.number = 73;
        element.Ar = 181;
        element.group = 5;
        element.period = 6;
        element.metal = this.metal;
        element.elUjemn = 1.5;
        this.elements.push(element);

        element = new Element();
        element.name = "Wolfram";
        element.symbol = "W";
        element.number = 74;
        element.Ar = 184;
        element.group = 6;
        element.period = 6;
        element.metal = this.metal;
        element.elUjemn = 2.0;
        this.elements.push(element);

        element = new Element();
        element.name = "Ren";
        element.symbol = "Re";
        element.number = 75;
        element.Ar = 186;
        element.group = 7;
        element.period = 6;
        element.metal = this.metal;
        element.elUjemn = 1.9;
        this.elements.push(element);

        element = new Element();
        element.name = "Osm";
        element.symbol = "Os";
        element.number = 76;
        element.Ar = 190;
        element.group = 8;
        element.period = 6;
        element.metal = this.metal;
        element.elUjemn = 2.2;
        this.elements.push(element);

        element = new Element();
        element.name = "Iryd";
        element.symbol = "Ir";
        element.number = 77;
        element.Ar = 192;
        element.group = 9;
        element.period = 6;
        element.metal = this.metal;
        element.elUjemn = 2.2;
        this.elements.push(element);

        element = new Element();
        element.name = "Platyna";
        element.symbol = "Pt";
        element.number = 78;
        element.Ar = 195;
        element.group = 10;
        element.period = 6;
        element.metal = this.metal;
        element.elUjemn = 2.2;
        this.elements.push(element);

        element = new Element();
        element.name = "Złoto";
        element.symbol = "Au";
        element.number = 79;
        element.Ar = 197;
        element.group = 11;
        element.period = 6;
        element.metal = this.metal;
        element.elUjemn = 2.4;
        this.elements.push(element);

        element = new Element();
        element.name = "Rtęć";
        element.symbol = "Hg";
        element.number = 80;
        element.Ar = 201;
        element.group = 12;
        element.period = 6;
        element.metal = this.metal;
        element.elUjemn = 1.9;
        this.elements.push(element);

        element = new Element();
        element.name = "Tal";
        element.symbol = "Tl";
        element.number = 81;
        element.Ar = 204;
        element.group = 13;
        element.period = 6;
        element.metal = this.metal;
        element.elUjemn = 1.8;
        this.elements.push(element);

        element = new Element();
        element.name = "Ołów";
        element.symbol = "Pb";
        element.number = 82;
        element.Ar = 207;
        element.group = 14;
        element.period = 6;
        element.metal = this.metal;
        element.elUjemn = 1.8;
        this.elements.push(element);

        element = new Element();
        element.name = "Bizmut";
        element.symbol = "Bi";
        element.number = 83;
        element.Ar = 209;
        element.group = 15;
        element.period = 6;
        element.metal = this.metal;
        element.elUjemn = 1.9;
        this.elements.push(element);

        element = new Element();
        element.name = "Polon";
        element.symbol = "Po";
        element.number = 84;
        element.Ar = 209;
        element.group = 16;
        element.period = 6;
        element.metal = this.metal;
        element.elUjemn = 2.0;
        this.elements.push(element);

        element = new Element();
        element.name = "Astat";
        element.symbol = "At";
        element.number = 85;
        element.Ar = 210;
        element.group = 17;
        element.period = 6;
        element.metal = this.nemetal;
        element.elUjemn = 2.2;
        this.elements.push(element);

        element = new Element();
        element.name = "Radom";
        element.symbol = "Rn";
        element.number = 86;
        element.Ar = 222;
        element.group = 18;
        element.period = 6;
        element.metal = this.nemetal;
        element.elUjemn = 0;
        this.elements.push(element);

        element = new Element();
        element.name = "Frans";
        element.symbol = "Fr";
        element.number = 87;
        element.Ar = 223;
        element.group = 1;
        element.period = 7;
        element.metal = this.metal;
        element.elUjemn = 0.7;
        this.elements.push(element);

        element = new Element();
        element.name = "Rad";
        element.symbol = "Ra";
        element.number = 88;
        element.Ar = 226;
        element.group = 2;
        element.period = 7;
        element.metal = this.metal;
        element.elUjemn = 0.9;
        this.elements.push(element);

        element = new Element();
        element.name = "Aktyn";
        element.symbol = "Ac";
        element.number = 89;
        element.Ar = 227;
        element.group = 3;
        element.period = 7;
        element.metal = this.metal;
        element.elUjemn = 1.1;
        this.elements.push(element);

        element = new Element();
        element.name = "Tor";
        element.symbol = "Th";
        element.number = 90;
        element.Ar = 232;
        element.group = 3;
        element.period = 7;
        element.metal = this.metal;
        element.elUjemn = 1.3;
        this.elements.push(element);

        element = new Element();
        element.name = "Protaktyn";
        element.symbol = "Pa";
        element.number = 91;
        element.Ar = 231;
        element.group = 3;
        element.period = 7;
        element.metal = this.metal;
        element.elUjemn = 1.5;
        this.elements.push(element);

        element = new Element();
        element.name = "Uran";
        element.symbol = "U";
        element.number = 92;
        element.Ar = 238;
        element.group = 3;
        element.period = 7;
        element.metal = this.metal;
        element.elUjemn = 1.7;
        this.elements.push(element);

        element = new Element();
        element.name = "Neptun";
        element.symbol = "Np";
        element.number = 93;
        element.Ar = 237;
        element.group = 3;
        element.period = 7;
        element.metal = this.metal;
        element.elUjemn = 1.4;
        this.elements.push(element);

        element = new Element();
        element.name = "Pluton";
        element.symbol = "Pu";
        element.number = 94;
        element.Ar = 244;
        element.group = 3;
        element.period = 7;
        element.metal = this.metal;
        element.elUjemn = 1.3;
        this.elements.push(element);

        element = new Element();
        element.name = "Ameryk";
        element.symbol = "Am";
        element.number = 95;
        element.Ar = 243;
        element.group = 3;
        element.period = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Kiur";
        element.symbol = "Cm";
        element.number = 96;
        element.Ar = 247;
        element.group = 3;
        element.period = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Berkel";
        element.symbol = "Bk";
        element.number = 97;
        element.Ar = 247;
        element.group = 3;
        element.period = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Kaliforn";
        element.symbol = "Cf";
        element.number = 98;
        element.Ar = 251;
        element.group = 3;
        element.period = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Einstein";
        element.symbol = "Es";
        element.number = 99;
        element.Ar = 252;
        element.group = 3;
        element.period = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Ferm";
        element.symbol = "Fm";
        element.number = 100;
        element.Ar = 257;
        element.group = 3;
        element.period = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Mendelew";
        element.symbol = "Md";
        element.number = 101;
        element.Ar = 258;
        element.group = 3;
        element.period = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Nobel";
        element.symbol = "Nb";
        element.number = 102;
        element.Ar = 259;
        element.group = 3;
        element.period = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Lorens";
        element.symbol = "Lr";
        element.number = 103;
        element.Ar = 262;
        element.group = 3;
        element.period = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Rutherford";
        element.symbol = "Rf";
        element.number = 104;
        element.Ar = 267;
        element.group = 4;
        element.period = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Dubn";
        element.symbol = "Db";
        element.number = 105;
        element.Ar = 268;
        element.group = 5;
        element.period = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Seaborg";
        element.symbol = "Sg";
        element.number = 106;
        element.Ar = 271;
        element.group = 6;
        element.period = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Bohr";
        element.symbol = "Bh";
        element.number = 107;
        element.Ar = 270;
        element.group = 7;
        element.period = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Has";
        element.symbol = "Hs";
        element.number = 108;
        element.Ar = 277;
        element.group = 8;
        element.period = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Meitner";
        element.symbol = "Mt";
        element.number = 109;
        element.Ar = 278;
        element.group = 9;
        element.period = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Darmsztadt";
        element.symbol = "Ds";
        element.number = 110;
        element.Ar = 281;
        element.group = 10;
        element.period = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Rpentgen";
        element.symbol = "Rg";
        element.number = 111;
        element.Ar = 281;
        element.group = 11;
        element.period = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Kopernik";
        element.symbol = "Cn";
        element.number = 112;
        element.Ar = 285;
        element.group = 12;
        element.period = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Nihonium";
        element.symbol = "Nh";
        element.number = 113;
        element.Ar = 286;
        element.group = 13;
        element.period = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Flerovium";
        element.symbol = "Fl";
        element.number = 114;
        element.Ar = 289;
        element.group = 14;
        element.period = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Moscovium";
        element.symbol = "Mc";
        element.number = 115;
        element.Ar = 288;
        element.group = 15;
        element.period = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Livermorium";
        element.symbol = "Lv";
        element.number = 116;
        element.Ar = 293;
        element.group = 16;
        element.period = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Tennessine";
        element.symbol = "Ts";
        element.number = 117;
        element.Ar = 293;
        element.group = 17;
        element.period = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Oganesson";
        element.symbol = "Og";
        element.number = 118;
        element.Ar = 294;
        element.group = 18;
        element.period = 7;
        element.metal = this.metal;
        this.elements.push(element);
    }
    
    Valetnost()
    {
        this.elements[0].Valetnost = [1];
        this.elements[0].Valetnost[0] = 1;

        this.elements[1].Valetnost = [1];
        this.elements[1].Valetnost[0] = 0;

        this.elements[2].Valetnost = [1];
        this.elements[2].Valetnost[0] = 1;

        this.elements[3].Valetnost = [1];
        this.elements[3].Valetnost[0] = 2;

        this.elements[4].Valetnost = [1];
        this.elements[4].Valetnost[0] = 3;

        this.elements[5].Valetnost = [2];
        this.elements[5].Valetnost[0] = 2;
        this.elements[5].Valetnost[1] = 4;

        this.elements[6].Valetnost = [5];
        this.elements[6].Valetnost[0] = 1;
        this.elements[6].Valetnost[1] = 2;
        this.elements[6].Valetnost[2] = 3;
        this.elements[6].Valetnost[3] = 4;
        this.elements[6].Valetnost[4] = 5;

        this.elements[7].Valetnost = [1];
        this.elements[7].Valetnost[0] = 2;

        this.elements[8].Valetnost = [1];
        this.elements[8].Valetnost[0] = 1;

        this.elements[9].Valetnost = [1];
        this.elements[9].Valetnost[0] = 0;

        this.elements[10].Valetnost = [1];
        this.elements[10].Valetnost[0] = 1;

        this.elements[11].Valetnost = [1];
        this.elements[11].Valetnost[0] = 2;

        this.elements[12].Valetnost = [1];
        this.elements[12].Valetnost[0] = 3;

        this.elements[13].Valetnost = [2];
        this.elements[13].Valetnost[0] = 2;
        this.elements[13].Valetnost[1] = 4;

        this.elements[14].Valetnost = [3];
        this.elements[14].Valetnost[0] = 1;
        this.elements[14].Valetnost[1] = 3;
        this.elements[14].Valetnost[2] = 5;

        this.elements[15].Valetnost = [3];
        this.elements[15].Valetnost[0] = 2;
        this.elements[15].Valetnost[1] = 4;
        this.elements[15].Valetnost[2] = 6;

        this.elements[16].Valetnost = [6];
        this.elements[16].Valetnost[0] = 1;
        this.elements[16].Valetnost[1] = 2;
        this.elements[16].Valetnost[2] = 3;
        this.elements[16].Valetnost[3] = 4;
        this.elements[16].Valetnost[4] = 5;
        this.elements[16].Valetnost[5] = 7;

        this.elements[17].Valetnost = [1];
        this.elements[17].Valetnost[0] = 0;

        this.elements[18].Valetnost = [1];
        this.elements[18].Valetnost[0] = 1;

        this.elements[19].Valetnost = [1];
        this.elements[19].Valetnost[0] = 2;

        this.elements[20].Valetnost = [1];
        this.elements[20].Valetnost[0] = 3;

        this.elements[21].Valetnost = [3];
        this.elements[21].Valetnost[0] = 2;
        this.elements[21].Valetnost[1] = 3;
        this.elements[21].Valetnost[2] = 4;

        this.elements[22].Valetnost = [4];
        this.elements[22].Valetnost[0] = 2;
        this.elements[22].Valetnost[1] = 3;
        this.elements[22].Valetnost[2] = 4;
        this.elements[22].Valetnost[3] = 5;

        this.elements[23].Valetnost = [3];
        this.elements[23].Valetnost[0] = 2;
        this.elements[23].Valetnost[1] = 3;
        this.elements[23].Valetnost[2] = 6;

        this.elements[24].Valetnost = [5];
        this.elements[24].Valetnost[0] = 2;
        this.elements[24].Valetnost[1] = 3;
        this.elements[24].Valetnost[2] = 4;
        this.elements[24].Valetnost[3] = 6;
        this.elements[24].Valetnost[4] = 7;

        this.elements[25].Valetnost = [4];
        this.elements[25].Valetnost[0] = 2;
        this.elements[25].Valetnost[1] = 3;
        this.elements[25].Valetnost[2] = 4;
        this.elements[25].Valetnost[3] = 6;

        this.elements[26].Valetnost = [3];
        this.elements[26].Valetnost[0] = 2;
        this.elements[26].Valetnost[1] = 3;
        this.elements[26].Valetnost[2] = 4;

        this.elements[27].Valetnost = [4];
        this.elements[27].Valetnost[0] = 2;
        this.elements[27].Valetnost[1] = 3;
        this.elements[27].Valetnost[2] = 4;
        this.elements[27].Valetnost[3] = 6;

        this.elements[28].Valetnost = [3];
        this.elements[28].Valetnost[0] = 1;
        this.elements[28].Valetnost[1] = 2;
        this.elements[28].Valetnost[2] = 3;

        this.elements[29].Valetnost = [1];
        this.elements[29].Valetnost[0] = 2;

        this.elements[30].Valetnost = [2];
        this.elements[30].Valetnost[0] = 3;
        this.elements[30].Valetnost[1] = 2;

        this.elements[31].Valetnost = [2];
        this.elements[31].Valetnost[0] = 2;
        this.elements[31].Valetnost[1] = 4;

        this.elements[32].Valetnost = [3];
        this.elements[32].Valetnost[0] = 2;
        this.elements[32].Valetnost[1] = 3;
        this.elements[32].Valetnost[2] = 5;

        this.elements[33].Valetnost = [3];
        this.elements[33].Valetnost[0] = 2;
        this.elements[33].Valetnost[1] = 4;
        this.elements[33].Valetnost[2] = 6;

        this.elements[34].Valetnost = [4];
        this.elements[34].Valetnost[0] = 1;
        this.elements[34].Valetnost[1] = 3;
        this.elements[34].Valetnost[2] = 4;
        this.elements[34].Valetnost[3] = 5;

        this.elements[35].Valetnost = [1];
        this.elements[35].Valetnost[0] = 0;

        this.elements[36].Valetnost = [1];
        this.elements[36].Valetnost[0] = 1;

        this.elements[37].Valetnost = [1];
        this.elements[37].Valetnost[0] = 2;

        this.elements[38].Valetnost = [1];
        this.elements[38].Valetnost[0] = 3;

        this.elements[39].Valetnost = [3];
        this.elements[39].Valetnost[0] = 2;
        this.elements[39].Valetnost[1] = 3;
        this.elements[39].Valetnost[2] = 4;

        this.elements[40].Valetnost = [4];
        this.elements[40].Valetnost[0] = 2;
        this.elements[40].Valetnost[1] = 3;
        this.elements[40].Valetnost[2] = 4;
        this.elements[40].Valetnost[3] = 5;

        this.elements[41].Valetnost = [5];
        this.elements[41].Valetnost[0] = 2;
        this.elements[41].Valetnost[1] = 3;
        this.elements[41].Valetnost[2] = 4;
        this.elements[41].Valetnost[3] = 5;
        this.elements[41].Valetnost[4] = 6;

        this.elements[42].Valetnost = [1];
        this.elements[42].Valetnost[0] = 6;

        this.elements[43].Valetnost = [6];
        this.elements[43].Valetnost[0] = 2;
        this.elements[43].Valetnost[1] = 3;
        this.elements[43].Valetnost[2] = 4;
        this.elements[43].Valetnost[3] = 6;
        this.elements[43].Valetnost[4] = 7;
        this.elements[43].Valetnost[5] = 8;

        this.elements[44].Valetnost = [4];
        this.elements[44].Valetnost[0] = 2;
        this.elements[44].Valetnost[1] = 3;
        this.elements[44].Valetnost[2] = 4;
        this.elements[44].Valetnost[3] = 6;

        this.elements[45].Valetnost = [3];
        this.elements[45].Valetnost[0] = 2;
        this.elements[45].Valetnost[1] = 4;
        this.elements[45].Valetnost[2] = 6;

        this.elements[46].Valetnost = [3];
        this.elements[46].Valetnost[0] = 1;
        this.elements[46].Valetnost[1] = 2;
        this.elements[46].Valetnost[2] = 3;

        this.elements[47].Valetnost = [2];
        this.elements[47].Valetnost[0] = 1;
        this.elements[47].Valetnost[1] = 2;

        this.elements[48].Valetnost = [3];
        this.elements[48].Valetnost[0] = 1;
        this.elements[48].Valetnost[1] = 2;
        this.elements[48].Valetnost[2] = 3;

        this.elements[49].Valetnost = [2];
        this.elements[49].Valetnost[0] = 2;
        this.elements[49].Valetnost[1] = 4;

        this.elements[50].Valetnost = [3];
        this.elements[50].Valetnost[0] = 3;
        this.elements[50].Valetnost[1] = 4;
        this.elements[50].Valetnost[2] = 5;

        this.elements[51].Valetnost = [3];
        this.elements[51].Valetnost[0] = 2;
        this.elements[51].Valetnost[1] = 4;
        this.elements[51].Valetnost[2] = 6;

        this.elements[52].Valetnost = [5];
        this.elements[52].Valetnost[0] = 1;
        this.elements[52].Valetnost[1] = 3;
        this.elements[52].Valetnost[2] = 4;
        this.elements[52].Valetnost[3] = 5;
        this.elements[52].Valetnost[4] = 7;

        this.elements[53].Valetnost = [1];
        this.elements[53].Valetnost[0] = 0;

        this.elements[54].Valetnost = [1];
        this.elements[54].Valetnost[0] = 1;

        this.elements[55].Valetnost = [1];
        this.elements[55].Valetnost[0] = 2;

        this.elements[56].Valetnost = [1];
        this.elements[56].Valetnost[0] = 3;

        this.elements[57].Valetnost = [2];
        this.elements[57].Valetnost[0] = 3;
        this.elements[57].Valetnost[1] = 4;

        this.elements[58].Valetnost = [2];
        this.elements[58].Valetnost[0] = 3;
        this.elements[58].Valetnost[1] = 4;

        this.elements[59].Valetnost = [1];
        this.elements[59].Valetnost[0] = 3;

        this.elements[60].Valetnost = [1];
        this.elements[60].Valetnost[0] = 3;

        this.elements[61].Valetnost = [2];
        this.elements[61].Valetnost[0] = 2;
        this.elements[61].Valetnost[1] = 3;

        this.elements[62].Valetnost = [2];
        this.elements[62].Valetnost[0] = 2;
        this.elements[62].Valetnost[1] = 3;

        this.elements[63].Valetnost = [1];
        this.elements[63].Valetnost[0] = 3;

        this.elements[64].Valetnost = [2];
        this.elements[64].Valetnost[0] = 3;
        this.elements[64].Valetnost[1] = 4;

        this.elements[65].Valetnost = [1];
        this.elements[65].Valetnost[0] = 3;

        this.elements[66].Valetnost = [1];
        this.elements[66].Valetnost[0] = 3;

        this.elements[67].Valetnost = [1];
        this.elements[67].Valetnost[0] = 3;

        this.elements[68].Valetnost = [1];
        this.elements[68].Valetnost[0] = 3;

        this.elements[69].Valetnost = [2];
        this.elements[69].Valetnost[0] = 2;
        this.elements[69].Valetnost[1] = 3;

        this.elements[70].Valetnost = [1];
        this.elements[70].Valetnost[0] = 3;

        this.elements[71].Valetnost = [1];
        this.elements[71].Valetnost[0] = 4;

        this.elements[72].Valetnost = [3];
        this.elements[72].Valetnost[0] = 3;
        this.elements[72].Valetnost[1] = 4;
        this.elements[72].Valetnost[2] = 5;

        this.elements[73].Valetnost = [5];
        this.elements[73].Valetnost[0] = 2;
        this.elements[73].Valetnost[1] = 3;
        this.elements[73].Valetnost[2] = 4;
        this.elements[73].Valetnost[3] = 5;
        this.elements[73].Valetnost[4] = 6;

        this.elements[74].Valetnost = [7];
        this.elements[74].Valetnost[0] = 1;
        this.elements[74].Valetnost[1] = 2;
        this.elements[74].Valetnost[2] = 3;
        this.elements[74].Valetnost[3] = 4;
        this.elements[74].Valetnost[4] = 5;
        this.elements[74].Valetnost[5] = 6;
        this.elements[74].Valetnost[6] = 7;

        this.elements[75].Valetnost = [5];
        this.elements[75].Valetnost[0] = 2;
        this.elements[75].Valetnost[1] = 3;
        this.elements[75].Valetnost[2] = 4;
        this.elements[75].Valetnost[3] = 6;
        this.elements[75].Valetnost[4] = 8;

        this.elements[76].Valetnost = [5];
        this.elements[76].Valetnost[0] = 1;
        this.elements[76].Valetnost[1] = 2;
        this.elements[76].Valetnost[2] = 3;
        this.elements[76].Valetnost[3] = 4;
        this.elements[76].Valetnost[4] = 6;

        this.elements[77].Valetnost = [5];
        this.elements[77].Valetnost[0] = 1;
        this.elements[77].Valetnost[1] = 2;
        this.elements[77].Valetnost[2] = 3;
        this.elements[77].Valetnost[3] = 4;
        this.elements[77].Valetnost[4] = 6;

        this.elements[78].Valetnost = [3];
        this.elements[78].Valetnost[0] = 1;
        this.elements[78].Valetnost[1] = 2;
        this.elements[78].Valetnost[2] = 3;

        this.elements[79].Valetnost = [2];
        this.elements[79].Valetnost[0] = 1;
        this.elements[79].Valetnost[1] = 2;

        this.elements[80].Valetnost = [3];
        this.elements[80].Valetnost[0] = 1;
        this.elements[80].Valetnost[1] = 2;
        this.elements[80].Valetnost[2] = 3;

        this.elements[81].Valetnost = [2];
        this.elements[81].Valetnost[0] = 2;
        this.elements[81].Valetnost[1] = 4;

        this.elements[82].Valetnost = [4];
        this.elements[82].Valetnost[0] = 2;
        this.elements[82].Valetnost[1] = 3;
        this.elements[82].Valetnost[2] = 4;
        this.elements[82].Valetnost[3] = 5;

        this.elements[83].Valetnost = [3];
        this.elements[83].Valetnost[0] = 2;
        this.elements[83].Valetnost[1] = 4;
        this.elements[83].Valetnost[2] = 6;

        this.elements[84].Valetnost = [4];
        this.elements[84].Valetnost[0] = 1;
        this.elements[84].Valetnost[1] = 3;
        this.elements[84].Valetnost[2] = 5;
        this.elements[84].Valetnost[3] = 7;

        this.elements[85].Valetnost = [2];
        this.elements[85].Valetnost[0] = 0;
        this.elements[85].Valetnost[1] = 2;

        this.elements[86].Valetnost = [1];
        this.elements[86].Valetnost[0] = 1;

        this.elements[87].Valetnost = [1];
        this.elements[87].Valetnost[0] = 2;

        this.elements[88].Valetnost = [1];
        this.elements[88].Valetnost[0] = 3;

        this.elements[89].Valetnost = [1];
        this.elements[89].Valetnost[0] = 4;

        this.elements[90].Valetnost = [2];
        this.elements[90].Valetnost[0] = 4;
        this.elements[90].Valetnost[1] = 5;

        this.elements[91].Valetnost = [4];
        this.elements[91].Valetnost[0] = 3;
        this.elements[91].Valetnost[1] = 4;
        this.elements[91].Valetnost[2] = 5;
        this.elements[91].Valetnost[3] = 6;

        this.elements[92].Valetnost = [5];
        this.elements[92].Valetnost[0] = 3;
        this.elements[92].Valetnost[1] = 4;
        this.elements[92].Valetnost[2] = 5;
        this.elements[92].Valetnost[3] = 6;
        this.elements[92].Valetnost[4] = 7;

        this.elements[93].Valetnost = [4];
        this.elements[93].Valetnost[0] = 3;
        this.elements[93].Valetnost[1] = 4;
        this.elements[93].Valetnost[2] = 5;
        this.elements[93].Valetnost[3] = 6;

        this.elements[94].Valetnost = [4];
        this.elements[94].Valetnost[0] = 3;
        this.elements[94].Valetnost[1] = 4;
        this.elements[94].Valetnost[2] = 5;
        this.elements[94].Valetnost[3] = 6;

        this.elements[95].Valetnost = [2];
        this.elements[95].Valetnost[0] = 3;
        this.elements[95].Valetnost[1] = 4;

        this.elements[96].Valetnost = [2];
        this.elements[96].Valetnost[0] = 3;
        this.elements[96].Valetnost[1] = 4;

        this.elements[97].Valetnost = [3];
        this.elements[97].Valetnost[0] = 2;
        this.elements[97].Valetnost[1] = 3;
        this.elements[97].Valetnost[2] = 4;

        this.elements[98].Valetnost = [2];
        this.elements[98].Valetnost[0] = 2;
        this.elements[98].Valetnost[1] = 3;

        this.elements[99].Valetnost = [2];
        this.elements[99].Valetnost[0] = 2;
        this.elements[99].Valetnost[1] = 3;

        this.elements[100].Valetnost = [2];
        this.elements[100].Valetnost[0] = 2;
        this.elements[100].Valetnost[1] = 3;

        this.elements[101].Valetnost = [2];
        this.elements[101].Valetnost[0] = 2;
        this.elements[101].Valetnost[1] = 3;

        this.elements[102].Valetnost = [1];
        this.elements[102].Valetnost[0] = 3;

        this.elements[103].Valetnost = [1];
        this.elements[103].Valetnost[0] = 4;

        this.elements[104].Valetnost = [1];
        this.elements[104].Valetnost[0] = 5;

        this.elements[105].Valetnost = [5];
        this.elements[105].Valetnost[0] = 2;
        this.elements[105].Valetnost[1] = 3;
        this.elements[105].Valetnost[2] = 4;
        this.elements[105].Valetnost[3] = 5;
        this.elements[105].Valetnost[4] = 6;

        this.elements[106].Valetnost = [1];
        this.elements[106].Valetnost[0] = 7;

        this.elements[107].Valetnost = [1];
        this.elements[107].Valetnost[0] = 8;

        for (let i = 108; i < this.elements.length; i++)
            this.elements[i].Valetnost = [0];
    }

    constructor()
    {
        this.Init();
        this.Valetnost();
        this.Graphics = [7, 5];
    }

    SPDF(number)
    {
        let time = number;
        let res = "";
        let i = 0;

        while (true)
        {
            if (time == 0)
                break;
            if (time >= this.numbers[i] && i < this.numbers.length)
            {
                time = time - this.numbers[i];
                res = res + this.str[i] + "<sup>" + this.numbers[i].toString() + "</sup> ";
                i++;
            }
            else
            {
                res = res + this.str[i] + "<sup>" + time.toString() + "</sup>";
                break;
            }
        }

        return res;
    }
}

class Graphic {
    constructor(images, table) {
        this.images = images;
        this.table = table;
    }

    InitGraphics()
    {
        this.table.Graphics[0] = [];
        this.table.Graphics[1] = [];
        this.table.Graphics[2] = [];
        this.table.Graphics[3] = [];
        this.table.Graphics[4] = [];
        this.table.Graphics[5] = [];
        this.table.Graphics[6] = [];
    }

    InitNumbers(number)
    {
        this.InitGraphics();
        let time = number;
        let i = 0;
        while(true)
        {
            if (i >= this.table.numbers.length)
                break;
            if (time >= this.table.numbers[i] && i < this.table.numbers.length)
            {
                time = time - this.table.numbers[i];
                this.table.Numbers[i] = this.table.numbers[i];
                i++;
            }
            else
            {
                this.table.Numbers[i] = time;
                break;
            }
        }
        
        for (let k = 1; k <= 7; k++)
        {
            let j = 0;
            for (let i = 0; i < this.table.Numbers.length; i++)
            {
                if (this.table.Level[i] == k)
                {
                    this.table.Graphics[k - 1][j] = this.table.Numbers[i];
                    j++;
                }
            }
        }
    }

    clearGraphic() {
        try {
            for (let i = 0 ; i < this.images.length; i++)
                this.images[i].src = "Sounds/3.png";
        }
        catch {
            return;
        }
    }
    
    drawGraphic() {
        try {
            if (this.table.currentElement == -1)
                return;
                
            this.InitNumbers(this.table.elements[this.table.currentElement].number);
            let cell = 0;
            let lines = [0, 1, 5, 14, 30, 46, 55];

            for (let i = 0; i < 7; i++) {
                if (this.table.Graphics[i, 0] == 0)
                    break;
        
                cell = lines[i];
                for (let j = 0; j < this.table.Graphics[i].length; j++) {
                    let temp = parseInt(this.table.Graphics[i][j] / 2);
                    for (let k = 0; k < temp; k++)
                        this.images[cell++].src = "Sounds/1.png";

                    if (temp * 2 !== this.table.Graphics[i][j])
                        this.images[cell++].src = "Sounds/2.png";
                }
            }
        }
        catch {
            return;
        }
    }
}

class MyStyles {
    styleAnswer(Text) {
        return "<span style=\"color: black; font-size: 25px; letter-spacing: 0px; font-weight: bold;\">" + Text + "</span>";
    }

    styleAnswerBr(Text) {
        return this.styleAnswer(Text) + this.br();
    }

    styleHeaderText(Text) {
        return "<span class=\"mainHTextResult\">" + Text + "</span>";
    }

    styleRes(res) {
        return "<span class=\"elektrKonf\">" + res + "</span>"
    }

    styleNotFound(Text) {
        return "<span class=\"notFound\">" + Text + "</span>";
    }

    br() {
        return "\n<br>";
    }

    twoBr() {
        return this.br() + this.br();
    }
}

class ResultTableChemia {
    constructor(table, Text, Styles) {
        this.table = table;
        this.Text = Text;
        this.Styles = Styles;
        this.ResultText = "";
    }

    mainFunction() {
        for (let i = 0; i < this.table.elements.length; i++) {
            if (this.table.elements[i].symbol.toString().toLowerCase() == this.Text.toString().toLowerCase() || 
                this.table.elements[i].name.toString().toLowerCase() == this.Text.toString().toLowerCase()) {
                this.table.currentElement = i;
                this.ResultText += this.Styles.styleHeaderText("Cechy" + this.Styles.br());
                this.ResultText +=  "Symbol atomu: " + this.Styles.styleAnswerBr(this.table.elements[i].symbol);
                this.ResultText += "Nazwa atomu: " + this.Styles.styleAnswerBr(this.table.elements[i].name);
                this.ResultText += "Liczba atomowa: " + this.Styles.styleAnswerBr(this.table.elements[i].number);
                this.ResultText += "Masa atomowa: " + this.Styles.styleAnswerBr(this.table.elements[i].Ar);
                if (this.table.elements[i].elUjemn != undefined)
                    this.ResultText += "Liczba elektroujemności: " + this.Styles.styleAnswerBr(this.table.elements[i].elUjemn);
                else
                    this.ResultText += "Liczba elektroujemności: " + " " + this.Styles.br();
                this.ResultText += "Metal/niemetal: " + this.Styles.styleAnswerBr(this.table.elements[i].metal);
                this.ResultText += "Grupa: " + this.Styles.styleAnswerBr(this.table.elements[i].group);
                this.ResultText += "Okres: " + this.Styles.styleAnswerBr(this.table.elements[i].period);    
                this.ResultText += "Liczba elektronów: " + this.Styles.styleAnswerBr(this.table.elements[i].number);
                this.ResultText += "Liczba protonów: " + this.Styles.styleAnswerBr(this.table.elements[i].number);
                this.ResultText += "Liczba neutronów: " + this.Styles.styleAnswerBr((parseInt(this.table.elements[i].Ar) - this.table.elements[i].number));
                this.ResultText += "Wyższe tlenki: ";
    
                if (this.table.elements[i].name != "Tlen" && this.table.elements[i].group != 9 && this.table.elements[i].group != 10)
                {
                    this.ResultText += this.Styles.styleAnswer(this.table.elements[i].symbol);
                    if (this.table.elements[i].group == 1 || this.table.elements[i].group == 11)
                        this.ResultText += this.Styles.styleAnswerBr("<sub>2</sub>O");
                    if (this.table.elements[i].group == 2 || this.table.elements[i].group == 12)
                        this.ResultText += this.Styles.styleAnswerBr("O");11
                    if (this.table.elements[i].group == 3 || this.table.elements[i].group == 13)
                        this.ResultText += this.Styles.styleAnswerBr("<sub>2</sub>O<sub>3</sub>");
                    if (this.table.elements[i].group == 4 || this.table.elements[i].group == 14)
                        this.ResultText += this.Styles.styleAnswerBr("O<sub>2</sub>");
                    if (this.table.elements[i].group == 5 || this.table.elements[i].group == 15)
                        this.ResultText += this.Styles.styleAnswerBr("<sub>2</sub>O<sub>5</sub>");
                    if (this.table.elements[i].group == 6 || this.table.elements[i].group == 16)
                        this.ResultText += this.Styles.styleAnswerBr("O<sub>3</sub>");
                    if (this.table.elements[i].group == 7 || this.table.elements[i].group == 17)
                        this.ResultText += this.Styles.styleAnswerBr("<sub>2</sub>O<sub>7</sub>");
                    if (this.table.elements[i].group == 8 || this.table.elements[i].group == 18)
                        this.ResultText += this.Styles.styleAnswerBr("O<sub>4</sub>");
                }
                else
                    this.ResultText += this.Styles.br();
    
                if (this.table.elements[i].group == 4 || this.table.elements[i].group == 14)
                {
                    this.ResultText += "Lotne związki: " + this.Styles.styleAnswer(this.table.elements[i].symbol);
                    this.ResultText += this.Styles.styleAnswerBr("H<sub>4</sub>");
                }
                else if (this.table.elements[i].group == 5 || this.table.elements[i].group == 15)
                {
                    this.ResultText += "Lotne związki: " + this.Styles.styleAnswer(this.table.elements[i].symbol);
                    this.ResultText += this.Styles.styleAnswerBr("H<sub>3</sub>");
                }
                else if (this.table.elements[i].group == 6 || this.table.elements[i].group == 16)
                {
                    this.ResultText += "Lotne związki: " + this.Styles.styleAnswer("H<sub>2</sub>");
                    this.ResultText += this.Styles.styleAnswerBr(this.table.elements[i].symbol);
                }
                else if (this.table.elements[i].group == 7 || this.table.elements[i].group == 17)
                {
                    this.ResultText += "Lotne związki: " + this.Styles.styleAnswer("H");
                    this.ResultText += this.Styles.styleAnswerBr(this.table.elements[i].symbol);
                }
                else {
                    this.ResultText += "Lotne związki: " + this.Styles.br();
                }
    
                let res = "";
                res = " " + this.table.SPDF(this.table.elements[i].number);
                this.ResultText += "Elektroniczna Konfiguracja:" + this.Styles.br() + this.Styles.styleRes(res) + this.Styles.br();
                this.ResultText += "Stopień utlenienia:\n\n";
                for (let j = 0; j < this.table.elements[i].Valetnost.length; j++) 
                    this.ResultText += this.Styles.styleAnswer(this.table.elements[i].Valetnost[j]) + " ";
                this.ResultText += this.Styles.twoBr();
                this.ResultText += this.Styles.styleHeaderText("Graficzna\nkonfiguracja\n\n");
                break;
            }
        }
    
        if (this.ResultText != "")
            return this.ResultText;
        else
            return this.ResultText = this.Styles.styleNotFound("Nie znaleziono");
    }
}

function writeInformation() {
    let table = new TableChemia();
    let styles = new MyStyles();
    let result = new ResultTableChemia(table, document.getElementsByClassName("GetTextBySymbol")[0].value, styles);
    document.getElementById("ResultText").innerHTML = result.mainFunction();
    if (result.ResultText == styles.styleNotFound("Nie znaleziono")) {
        document.getElementsByClassName("result")[0].style.height = "150px";
        document.getElementById("graphicKonf").style.height = "0px";
        document.getElementById("graphicKonf").style.visibility = "hidden";
    }
    else {
        document.getElementsByClassName("result")[0].style.height = "1900px";
        document.getElementById("graphicKonf").style.height = "500px";
        document.getElementById("graphicKonf").style.visibility = "visible";
        let images = document.getElementsByClassName("graphicImg");
        let graphic = new Graphic(images, table);
        graphic.clearGraphic();
        graphic.drawGraphic();
    }
}