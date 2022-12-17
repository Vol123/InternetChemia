class Element {
    symbol;
    number;
    numberofperiod;
    numberofgroup;
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
        element.numberofgroup = 1;
        element.numberofperiod = 1;
        element.metal = this.nemetal;
        element.elUjemn = 2.1;
        this.elements.push(element);

        element = new Element();
        element.name = "Hel";
        element.symbol = "He";
        element.number = 2;
        element.Ar = 4;
        element.numberofgroup = 8;
        element.numberofperiod = 1;
        element.metal = this.nemetal;
        element.elUjemn = 0;
        this.elements.push(element);

        element = new Element();
        element.name = "Lit";
        element.symbol = "Li";
        element.number = 3;
        element.Ar = 7;
        element.numberofgroup = 1;
        element.numberofperiod = 2;
        element.metal = this.metal;
        element.elUjemn = 1.0;
        this.elements.push(element);

        element = new Element();
        element.name = "Beryl";
        element.symbol = "Be";
        element.number = 4;
        element.Ar = 9;
        element.numberofgroup = 2;
        element.numberofperiod = 2;
        element.metal = this.metal;
        element.elUjemn = 1.5;
        this.elements.push(element);

        element = new Element();
        element.name = "Bor";
        element.symbol = "B";
        element.number = 5;
        element.Ar = 11;
        element.numberofgroup = 3;
        element.numberofperiod = 2;
        element.metal = this.nemetal;
        element.elUjemn = 2.0;
        this.elements.push(element);

        element = new Element();
        element.name = "Więgiel";
        element.symbol = "C";
        element.number = 6;
        element.Ar = 12;
        element.numberofgroup = 4;
        element.numberofperiod = 2;
        element.metal = this.nemetal;
        element.elUjemn = 2.5;
        this.elements.push(element);

        element = new Element();
        element.name = "Azot";
        element.symbol = "N";
        element.number = 7;
        element.Ar = 14;
        element.numberofgroup = 5;
        element.numberofperiod = 2;
        element.metal = this.nemetal;
        element.elUjemn = 3.0;
        this.elements.push(element);

        element = new Element();
        element.name = "Tlen";
        element.symbol = "O";
        element.number = 8;
        element.Ar = 16;
        element.numberofgroup = 6;
        element.numberofperiod = 2;
        element.metal = this.nemetal;
        element.elUjemn = 3.5;
        this.elements.push(element);

        element = new Element();
        element.name = "Fluor";
        element.symbol = "F";
        element.number = 9;
        element.Ar = 19;
        element.numberofgroup = 7;
        element.numberofperiod = 2;
        element.metal = this.nemetal;
        element.elUjemn = 4.0;
        this.elements.push(element);

        element = new Element();
        element.name = "Neon";
        element.symbol = "Ne";
        element.number = 10;
        element.Ar = 20;
        element.numberofgroup = 8;
        element.numberofperiod = 2;
        element.metal = this.nemetal;
        element.elUjemn = 0;
        this.elements.push(element);

        element = new Element();
        element.name = "Sód";
        element.symbol = "Na";
        element.number = 11;
        element.Ar = 23;
        element.numberofgroup = 1;
        element.numberofperiod = 3;
        element.metal = this.metal;
        element.elUjemn = 0.9;
        this.elements.push(element);

        element = new Element();
        element.name = "Magnez";
        element.symbol = "Mg";
        element.number = 12;
        element.Ar = 24;
        element.numberofgroup = 2;
        element.numberofperiod = 3;
        element.metal = this.metal;
        element.elUjemn = 1.2;
        this.elements.push(element);

        element = new Element();
        element.name = "Glin";
        element.symbol = "Al";
        element.number = 13;
        element.Ar = 27;
        element.numberofgroup = 3;
        element.numberofperiod = 3;
        element.metal = this.metal;
        element.elUjemn = 1.5;
        this.elements.push(element);

        element = new Element();
        element.name = "Krzem";
        element.symbol = "Si";
        element.number = 14;
        element.Ar = 28;
        element.numberofgroup = 4;
        element.numberofperiod = 3;
        element.metal = this.nemetal;
        element.elUjemn = 1.8;
        this.elements.push(element);

        element = new Element();
        element.name = "Fosfor";
        element.symbol = "P";
        element.number = 15;
        element.Ar = 31;
        element.numberofgroup = 5;
        element.numberofperiod = 3;
        element.metal = this.nemetal;
        element.elUjemn = 2.1;
        this.elements.push(element);

        element = new Element();
        element.name = "Siarka";
        element.symbol = "S";
        element.number = 16;
        element.Ar = 32;
        element.numberofgroup = 6;
        element.numberofperiod = 3;
        element.metal = this.nemetal;
        element.elUjemn = 2.5;
        this.elements.push(element);

        element = new Element();
        element.name = "Chlor";
        element.symbol = "Cl";
        element.number = 17;
        element.Ar = 35.5;
        element.numberofgroup = 7;
        element.numberofperiod = 3;
        element.metal = this.nemetal;
        element.elUjemn = 3.0;
        this.elements.push(element);

        element = new Element();
        element.name = "Argon";
        element.symbol = "Ar";
        element.number = 18;
        element.Ar = 40;
        element.numberofgroup = 8;
        element.numberofperiod = 3;
        element.metal = this.nemetal;
        element.elUjemn = 0;
        this.elements.push(element);

        element = new Element();
        element.name = "Potas";
        element.symbol = "K";
        element.number = 19;
        element.Ar = 39;
        element.numberofgroup = 1;
        element.numberofperiod = 4;
        element.metal = this.metal;
        element.elUjemn = 0.9;
        this.elements.push(element);

        element = new Element();
        element.name = "Wapń";
        element.symbol = "Ca";
        element.number = 20;
        element.Ar = 40;
        element.numberofgroup = 2;
        element.numberofperiod = 4;
        element.metal = this.metal;
        element.elUjemn = 1.0;
        this.elements.push(element);

        element = new Element();
        element.name = "Skand";
        element.symbol = "Sc";
        element.number = 21;
        element.Ar = 45;
        element.numberofgroup = 3;
        element.numberofperiod = 4;
        element.metal = this.metal;
        element.elUjemn = 1.3;
        this.elements.push(element);

        element = new Element();
        element.name = "Tytan";
        element.symbol = "Ti";
        element.number = 22;
        element.Ar = 48;
        element.numberofgroup = 4;
        element.numberofperiod = 4;
        element.metal = this.metal;
        element.elUjemn = 1.5;
        this.elements.push(element);

        element = new Element();
        element.name = "Wanad";
        element.symbol = "V";
        element.number = 23;
        element.Ar = 51;
        element.numberofgroup = 5;
        element.numberofperiod = 4;
        element.metal = this.metal;
        element.elUjemn = 1.7;
        this.elements.push(element);

        element = new Element();
        element.name = "Chrom";
        element.symbol = "Cr";
        element.number = 24;
        element.Ar = 52;
        element.numberofgroup = 6;
        element.numberofperiod = 4;
        element.metal = this.metal;
        element.elUjemn = 1.9;
        this.elements.push(element);

        element = new Element();
        element.name = "Mangan";
        element.symbol = "Mn";
        element.number = 25;
        element.Ar = 55;
        element.numberofgroup = 7;
        element.numberofperiod = 4;
        element.metal = this.metal;
        element.elUjemn = 1.7;
        this.elements.push(element);

        element = new Element();
        element.name = "Żelazo";
        element.symbol = "Fe";
        element.number = 26;
        element.Ar = 56;
        element.numberofgroup = 8;
        element.numberofperiod = 4;
        element.metal = this.metal;
        element.elUjemn = 1.9;
        this.elements.push(element);

        element = new Element();
        element.name = "Kobalt";
        element.symbol = "Co";
        element.number = 27;
        element.Ar = 59;
        element.numberofgroup = 8;
        element.numberofperiod = 4;
        element.metal = this.metal;
        element.elUjemn = 2.0;
        this.elements.push(element);

        element = new Element();
        element.name = "Nikiel";
        element.symbol = "Ni";
        element.number = 28;
        element.Ar = 59;
        element.numberofgroup = 8;
        element.numberofperiod = 4;
        element.metal = this.metal;
        element.elUjemn = 2.0;
        this.elements.push(element);

        element = new Element();
        element.name = "Miedz";
        element.symbol = "Cu";
        element.number = 29;
        element.Ar = 64;
        element.numberofgroup = 1;
        element.numberofperiod = 4;
        element.metal = this.metal;
        element.elUjemn = 1.9;
        this.elements.push(element);

        element = new Element();
        element.name = "Cynk";
        element.symbol = "Zn";
        element.number = 30;
        element.Ar = 65;
        element.numberofgroup = 2;
        element.numberofperiod = 4;
        element.metal = this.metal;
        element.elUjemn = 1.6;
        this.elements.push(element);

        element = new Element();
        element.name = "Gal";
        element.symbol = "Ga";
        element.number = 31;
        element.Ar = 70;
        element.numberofgroup = 3;
        element.numberofperiod = 4;
        element.metal = this.metal;
        element.elUjemn = 1.6;
        this.elements.push(element);

        element = new Element();
        element.name = "German";
        element.symbol = "Ge";
        element.number = 32;
        element.Ar = 73;
        element.numberofgroup = 4;
        element.numberofperiod = 4;
        element.metal = this.metal;
        element.elUjemn = 1.8;
        this.elements.push(element);

        element = new Element();
        element.name = "Arsen";
        element.symbol = "As";
        element.number = 33;
        element.Ar = 75;
        element.numberofgroup = 5;
        element.numberofperiod = 4;
        element.metal = this.nemetal;
        element.elUjemn = 2.0;
        this.elements.push(element);

        element = new Element();
        element.name = "Selen";
        element.symbol = "Se";
        element.number = 34;
        element.Ar = 79;
        element.numberofgroup = 6;
        element.numberofperiod = 4;
        element.metal = this.nemetal;
        element.elUjemn = 2.4;
        this.elements.push(element);

        element = new Element();
        element.name = "Brom";
        element.symbol = "Br";
        element.number = 35;
        element.Ar = 80;
        element.numberofgroup = 7;
        element.numberofperiod = 4;
        element.metal = this.nemetal;
        element.elUjemn = 2.8;
        this.elements.push(element);

        element = new Element();
        element.name = "Krypton";
        element.symbol = "Kr";
        element.number = 36;
        element.Ar = 84;
        element.numberofgroup = 8;
        element.numberofperiod = 4;
        element.metal = this.nemetal;
        element.elUjemn = 0;
        this.elements.push(element);

        element = new Element();
        element.name = "Rubid";
        element.symbol = "Rb";
        element.number = 37;
        element.Ar = 85;
        element.numberofgroup = 1;
        element.numberofperiod = 5;
        element.metal = this.metal;
        element.elUjemn = 0.8;
        this.elements.push(element);

        element = new Element();
        element.name = "Stront";
        element.symbol = "Sr";
        element.number = 38;
        element.Ar = 88;
        element.numberofgroup = 2;
        element.numberofperiod = 5;
        element.metal = this.metal;
        element.elUjemn = 1.0;
        this.elements.push(element);

        element = new Element();
        element.name = "Itr";
        element.symbol = "Y";
        element.number = 39;
        element.Ar = 89;
        element.numberofgroup = 3;
        element.numberofperiod = 5;
        element.metal = this.metal;
        element.elUjemn = 1.3;
        this.elements.push(element);

        element = new Element();
        element.name = "Cyrkon";
        element.symbol = "Zr";
        element.number = 40;
        element.Ar = 91;
        element.numberofgroup = 4;
        element.numberofperiod = 5;
        element.metal = this.metal;
        element.elUjemn = 1.4;
        this.elements.push(element);

        element = new Element();
        element.name = "Niob";
        element.symbol = "Nb";
        element.number = 41;
        element.Ar = 93;
        element.numberofgroup = 5;
        element.numberofperiod = 5;
        element.metal = this.metal;
        element.elUjemn = 1.6;
        this.elements.push(element);

        element = new Element();
        element.name = "Molibden";
        element.symbol = "Mo";
        element.number = 42;
        element.Ar = 96;
        element.numberofgroup = 6;
        element.numberofperiod = 5;
        element.metal = this.metal;
        element.elUjemn = 2.0;
        this.elements.push(element);

        element = new Element();
        element.name = "Technet";
        element.symbol = "Tc";
        element.number = 43;
        element.Ar = 98;
        element.numberofgroup = 7;
        element.numberofperiod = 5;
        element.metal = this.metal;
        element.elUjemn = 1.9;
        this.elements.push(element);

        element = new Element();
        element.name = "Ruten";
        element.symbol = "Ru";
        element.number = 44;
        element.Ar = 101;
        element.numberofgroup = 8;
        element.numberofperiod = 5;
        element.metal = this.metal;
        element.elUjemn = 2.2;
        this.elements.push(element);

        element = new Element();
        element.name = "Rod";
        element.symbol = "Rh";
        element.number = 45;
        element.Ar = 103;
        element.numberofgroup = 8;
        element.numberofperiod = 5;
        element.metal = this.metal;
        element.elUjemn = 2.2;
        this.elements.push(element);

        element = new Element();
        element.name = "Pallad";
        element.symbol = "Pd";
        element.number = 46;
        element.Ar = 107;
        element.numberofgroup = 8;
        element.numberofperiod = 5;
        element.metal = this.metal;
        element.elUjemn = 2.2;
        this.elements.push(element);

        element = new Element();
        element.name = "Srebro";
        element.symbol = "Ag";
        element.number = 47;
        element.Ar = 108;
        element.numberofgroup = 1;
        element.numberofperiod = 5;
        element.metal = this.metal;
        element.elUjemn = 1.9;
        this.elements.push(element);

        element = new Element();
        element.name = "Kadm";
        element.symbol = "Cd";
        element.number = 48;
        element.Ar = 112;
        element.numberofgroup = 2;
        element.numberofperiod = 5;
        element.metal = this.metal;
        element.elUjemn = 1.7;
        this.elements.push(element);

        element = new Element();
        element.name = "Ind";
        element.symbol = "In";
        element.number = 49;
        element.Ar = 115;
        element.numberofgroup = 3;
        element.numberofperiod = 5;
        element.metal = this.metal;
        element.elUjemn = 1.7;
        this.elements.push(element);

        element = new Element();
        element.name = "Cyna";
        element.symbol = "Sn";
        element.number = 50;
        element.Ar = 119;
        element.numberofgroup = 4;
        element.numberofperiod = 5;
        element.metal = this.metal;
        element.elUjemn = 1.8;
        this.elements.push(element);

        element = new Element();
        element.name = "Antymon";
        element.symbol = "Sb";
        element.number = 51;
        element.Ar = 122;
        element.numberofgroup = 5;
        element.numberofperiod = 5;
        element.metal = this.nemetal;
        element.elUjemn = 1.9;
        this.elements.push(element);

        element = new Element();
        element.name = "Tellur";
        element.symbol = "Te";
        element.number = 52;
        element.Ar = 128;
        element.numberofgroup = 6;
        element.numberofperiod = 5;
        element.metal = this.nemetal;
        element.elUjemn = 2.1;
        this.elements.push(element);

        element = new Element();
        element.name = "Jod";
        element.symbol = "I";
        element.number = 53;
        element.Ar = 127;
        element.numberofgroup = 7;
        element.numberofperiod = 5;
        element.metal = this.nemetal;
        element.elUjemn = 2.5;
        this.elements.push(element);

        element = new Element();
        element.name = "Ksenon";
        element.symbol = "Xe";
        element.number = 54;
        element.Ar = 131;
        element.numberofgroup = 8;
        element.numberofperiod = 5;
        element.metal = this.nemetal;
        element.elUjemn = 0;
        this.elements.push(element);

        element = new Element();
        element.name = "Cez";
        element.symbol = "Cs";
        element.number = 55;
        element.Ar = 133;
        element.numberofgroup = 1;
        element.numberofperiod = 6;
        element.metal = this.metal;
        element.elUjemn = 0.7;
        this.elements.push(element);

        element = new Element();
        element.name = "Bar";
        element.symbol = "Ba";
        element.number = 56;
        element.Ar = 137;
        element.numberofgroup = 2;
        element.numberofperiod = 6;
        element.metal = this.metal;
        element.elUjemn = 0.9;
        this.elements.push(element);

        element = new Element();
        element.name = "Lantan";
        element.symbol = "La";
        element.number = 57;
        element.Ar = 139;
        element.numberofgroup = 3;
        element.numberofperiod = 6;
        element.metal = this.metal;
        element.elUjemn = 1.1;
        this.elements.push(element);
/***/
        element = new Element();
        element.name = "Cer";
        element.symbol = "Ce";
        element.number = 58;
        element.Ar = 140;
        element.numberofgroup = 3;
        element.numberofperiod = 6;
        element.metal = this.metal;
        element.elUjemn = 1.1;
        this.elements.push(element);

        element = new Element();
        element.name = "Hafn";
        element.symbol = "Hf";
        element.number = 72;
        element.Ar = 178;
        element.numberofgroup = 4;
        element.numberofperiod = 6;
        element.metal = this.metal;
        element.elUjemn = 1.3;
        this.elements.push(element);

        element = new Element();
        element.name = "Tantal";
        element.symbol = "Ta";
        element.number = 73;
        element.Ar = 181;
        element.numberofgroup = 5;
        element.numberofperiod = 6;
        element.metal = this.metal;
        element.elUjemn = 1.5;
        this.elements.push(element);

        element = new Element();
        element.name = "Wolfram";
        element.symbol = "W";
        element.number = 74;
        element.Ar = 184;
        element.numberofgroup = 6;
        element.numberofperiod = 6;
        element.metal = this.metal;
        element.elUjemn = 2.0;
        this.elements.push(element);

        element = new Element();
        element.name = "Ren";
        element.symbol = "Re";
        element.number = 75;
        element.Ar = 186;
        element.numberofgroup = 7;
        element.numberofperiod = 6;
        element.metal = this.metal;
        element.elUjemn = 1.9;
        this.elements.push(element);

        element = new Element();
        element.name = "Osm";
        element.symbol = "Os";
        element.number = 76;
        element.Ar = 190;
        element.numberofgroup = 8;
        element.numberofperiod = 6;
        element.metal = this.metal;
        element.elUjemn = 2.2;
        this.elements.push(element);

        element = new Element();
        element.name = "Iryd";
        element.symbol = "Ir";
        element.number = 77;
        element.Ar = 192;
        element.numberofgroup = 8;
        element.numberofperiod = 6;
        element.metal = this.metal;
        element.elUjemn = 2.2;
        this.elements.push(element);

        element = new Element();
        element.name = "Platyna";
        element.symbol = "Pt";
        element.number = 78;
        element.Ar = 195;
        element.numberofgroup = 8;
        element.numberofperiod = 6;
        element.metal = this.metal;
        element.elUjemn = 2.2;
        this.elements.push(element);

        element = new Element();
        element.name = "Złoto";
        element.symbol = "Au";
        element.number = 79;
        element.Ar = 197;
        element.numberofgroup = 1;
        element.numberofperiod = 6;
        element.metal = this.metal;
        element.elUjemn = 2.4;
        this.elements.push(element);

        element = new Element();
        element.name = "Rtęć";
        element.symbol = "Hg";
        element.number = 80;
        element.Ar = 201;
        element.numberofgroup = 2;
        element.numberofperiod = 6;
        element.metal = this.metal;
        element.elUjemn = 1.9;
        this.elements.push(element);

        element = new Element();
        element.name = "Tal";
        element.symbol = "Tl";
        element.number = 81;
        element.Ar = 204;
        element.numberofgroup = 3;
        element.numberofperiod = 6;
        element.metal = this.metal;
        element.elUjemn = 1.8;
        this.elements.push(element);

        element = new Element();
        element.name = "Ołów";
        element.symbol = "Pb";
        element.number = 82;
        element.Ar = 207;
        element.numberofgroup = 4;
        element.numberofperiod = 6;
        element.metal = this.metal;
        element.elUjemn = 1.8;
        this.elements.push(element);

        element = new Element();
        element.name = "Bizmut";
        element.symbol = "Bi";
        element.number = 83;
        element.Ar = 209;
        element.numberofgroup = 5;
        element.numberofperiod = 6;
        element.metal = this.metal;
        element.elUjemn = 1.9;
        this.elements.push(element);

        element = new Element();
        element.name = "Polon";
        element.symbol = "Po";
        element.number = 84;
        element.Ar = 209;
        element.numberofgroup = 6;
        element.numberofperiod = 6;
        element.metal = this.metal;
        element.elUjemn = 2.0;
        this.elements.push(element);

        element = new Element();
        element.name = "Astat";
        element.symbol = "At";
        element.number = 85;
        element.Ar = 210;
        element.numberofgroup = 7;
        element.numberofperiod = 6;
        element.metal = this.nemetal;
        element.elUjemn = 2.2;
        this.elements.push(element);

        element = new Element();
        element.name = "Radom";
        element.symbol = "Rn";
        element.number = 86;
        element.Ar = 222;
        element.numberofgroup = 8;
        element.numberofperiod = 6;
        element.metal = this.nemetal;
        element.elUjemn = 0;
        this.elements.push(element);

        element = new Element();
        element.name = "Frans";
        element.symbol = "Fr";
        element.number = 87;
        element.Ar = 223;
        element.numberofgroup = 1;
        element.numberofperiod = 7;
        element.metal = this.metal;
        element.elUjemn = 0.7;
        this.elements.push(element);

        element = new Element();
        element.name = "Rad";
        element.symbol = "Ra";
        element.number = 88;
        element.Ar = 226;
        element.numberofgroup = 2;
        element.numberofperiod = 7;
        element.metal = this.metal;
        element.elUjemn = 0.9;
        this.elements.push(element);

        element = new Element();
        element.name = "Aktyn";
        element.symbol = "Ac";
        element.number = 89;
        element.Ar = 227;
        element.numberofgroup = 3;
        element.numberofperiod = 7;
        element.metal = this.metal;
        element.elUjemn = 1.1;
        this.elements.push(element);

        element = new Element();
        element.name = "Rutherford";
        element.symbol = "Rf";
        element.number = 104;
        element.Ar = 267;
        element.numberofgroup = 4;
        element.numberofperiod = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Dubn";
        element.symbol = "Db";
        element.number = 105;
        element.Ar = 270;
        element.numberofgroup = 5;
        element.numberofperiod = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Seaborg";
        element.symbol = "Sg";
        element.number = 106;
        element.Ar = 270;
        element.numberofgroup = 6;
        element.numberofperiod = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Bohr";
        element.symbol = "Bh";
        element.number = 107;
        element.Ar = 270;
        element.numberofgroup = 7;
        element.numberofperiod = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Has";
        element.symbol = "Hs";
        element.number = 108;
        element.Ar = 270;
        element.numberofgroup = 8;
        element.numberofperiod = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Meitner";
        element.symbol = "Mt";
        element.number = 109;
        element.Ar = 278;
        element.numberofgroup = 8;
        element.numberofperiod = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Darmsztadt";
        element.symbol = "Ds";
        element.number = 110;
        element.Ar = 281;
        element.numberofgroup = 8;
        element.numberofperiod = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Rpentgen";
        element.symbol = "Rg";
        element.number = 111;
        element.Ar = 281;
        element.numberofgroup = 1;
        element.numberofperiod = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Kopernik";
        element.symbol = "Cn";
        element.number = 112;
        element.Ar = 285;
        element.numberofgroup = 2;
        element.numberofperiod = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Nihonium";
        element.symbol = "Nh";
        element.number = 113;
        element.Ar = 286;
        element.numberofgroup = 3;
        element.numberofperiod = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Flerovium";
        element.symbol = "Fl";
        element.number = 114;
        element.Ar = 289;
        element.numberofgroup = 4;
        element.numberofperiod = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Moscovium";
        element.symbol = "Mc";
        element.number = 115;
        element.Ar = 288;
        element.numberofgroup = 5;
        element.numberofperiod = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Livermorium";
        element.symbol = "Lv";
        element.number = 116;
        element.Ar = 293;
        element.numberofgroup = 6;
        element.numberofperiod = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Tennessine";
        element.symbol = "Ts";
        element.number = 117;
        element.Ar = 293;
        element.numberofgroup = 7;
        element.numberofperiod = 7;
        element.metal = this.metal;
        this.elements.push(element);

        element = new Element();
        element.name = "Oganesson";
        element.symbol = "Og";
        element.number = 118;
        element.Ar = 294;
        element.numberofgroup = 8;
        element.numberofperiod = 7;
        element.metal = this.metal;
        this.elements.push(element);
    }
    
    Valetnost()
    {
        this.elements[0].Valetnost = [2];
        this.elements[0].Valetnost[0] = 1;
        this.elements[0].Valetnost[1] = -1;

        this.elements[1].Valetnost = [1];
        this.elements[1].Valetnost[0] = 0;

        this.elements[2].Valetnost = [1];
        this.elements[2].Valetnost[0] = 1;

        this.elements[3].Valetnost = [1];
        this.elements[3].Valetnost[0] = 2;

        this.elements[4].Valetnost = [2];
        this.elements[4].Valetnost[0] = 3;
        this.elements[4].Valetnost[1] = -3;

        this.elements[5].Valetnost = [2];
        this.elements[5].Valetnost[0] = 2;
        this.elements[5].Valetnost[1] = 4;

        this.elements[6].Valetnost = [8];
        this.elements[6].Valetnost[0] = -3;
        this.elements[6].Valetnost[1] = -2;
        this.elements[6].Valetnost[2] = -1;
        this.elements[6].Valetnost[3] = 1;
        this.elements[6].Valetnost[4] = 2;
        this.elements[6].Valetnost[5] = 3;
        this.elements[6].Valetnost[6] = 4;
        this.elements[6].Valetnost[7] = 5;

        this.elements[7].Valetnost = [1];
        this.elements[7].Valetnost[0] = -2;

        this.elements[8].Valetnost = [2];
        this.elements[8].Valetnost[0] = -1;
        this.elements[8].Valetnost[1] = 1;

        this.elements[9].Valetnost = [1];
        this.elements[9].Valetnost[0] = 0;

        this.elements[10].Valetnost = [1];
        this.elements[10].Valetnost[0] = 1;

        this.elements[11].Valetnost = [1];
        this.elements[11].Valetnost[0] = 2;

        this.elements[12].Valetnost = [1];
        this.elements[12].Valetnost[0] = 3;

        this.elements[13].Valetnost = [3];
        this.elements[13].Valetnost[0] = -4;
        this.elements[13].Valetnost[1] = 2;
        this.elements[13].Valetnost[2] = 4;

        this.elements[14].Valetnost = [4];
        this.elements[14].Valetnost[0] = -3;
        this.elements[14].Valetnost[1] = 1;
        this.elements[14].Valetnost[2] = 3;
        this.elements[14].Valetnost[2] = 5;

        //-1, +1, (+2), +3, (+4), +5, +7

        // -2, +2, +4, +6

        this.elements[15].Valetnost = [4];
        this.elements[15].Valetnost[0] = -2;
        this.elements[15].Valetnost[1] = 2;
        this.elements[15].Valetnost[2] = 4;
        this.elements[15].Valetnost[2] = 6;

        this.elements[16].Valetnost = [7];
        this.elements[16].Valetnost[0] = -1;
        this.elements[16].Valetnost[1] = 1;
        this.elements[16].Valetnost[2] = 2;
        this.elements[16].Valetnost[3] = 3;
        this.elements[16].Valetnost[4] = 4;
        this.elements[16].Valetnost[5] = 5;
        this.elements[16].Valetnost[6] = 7;

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

        this.elements[31].Valetnost = [3];
        this.elements[31].Valetnost[0] = -4;
        this.elements[31].Valetnost[1] = 2;
        this.elements[31].Valetnost[2] = 4;

        this.elements[32].Valetnost = [4];
        this.elements[32].Valetnost[0] = -3;
        this.elements[32].Valetnost[1] = 2;
        this.elements[32].Valetnost[2] = 3;
        this.elements[32].Valetnost[3] = 5;

        this.elements[33].Valetnost = [4];
        this.elements[33].Valetnost[0] = -2;
        this.elements[33].Valetnost[1] = 2;
        this.elements[33].Valetnost[2] = 4;
        this.elements[33].Valetnost[3] = 6;

        this.elements[34].Valetnost = [5];
        this.elements[34].Valetnost[0] = -1;
        this.elements[34].Valetnost[1] = 1;
        this.elements[34].Valetnost[2] = 3;
        this.elements[34].Valetnost[3] = 4;
        this.elements[34].Valetnost[4] = 5;

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

        this.elements[50].Valetnost = [4];
        this.elements[50].Valetnost[0] = -3;
        this.elements[50].Valetnost[1] = 3;
        this.elements[50].Valetnost[2] = 4;
        this.elements[50].Valetnost[3] = 5;

        this.elements[51].Valetnost = [4];
        this.elements[51].Valetnost[0] = -2;
        this.elements[51].Valetnost[1] = 2;
        this.elements[51].Valetnost[2] = 4;
        this.elements[51].Valetnost[3] = 6;

        this.elements[52].Valetnost = [6];
        this.elements[52].Valetnost[0] = -1;
        this.elements[52].Valetnost[1] = 1;
        this.elements[52].Valetnost[2] = 3;
        this.elements[52].Valetnost[3] = 4;
        this.elements[52].Valetnost[4] = 5;
        this.elements[52].Valetnost[5] = 7;

        this.elements[53].Valetnost = [1];
        this.elements[53].Valetnost[0] = 0;

        this.elements[54].Valetnost = [1];
        this.elements[54].Valetnost[0] = 1;

        this.elements[55].Valetnost = [1];
        this.elements[55].Valetnost[0] = 2;

        this.elements[56].Valetnost = [1];
        this.elements[56].Valetnost[0] = 3;

        this.elements[57].Valetnost = [1];
        this.elements[57].Valetnost[0] = 4;

        this.elements[58].Valetnost = [3];
        this.elements[58].Valetnost[0] = 3;
        this.elements[58].Valetnost[1] = 4;
        this.elements[58].Valetnost[2] = 5;

        this.elements[59].Valetnost = [5];
        this.elements[59].Valetnost[0] = 2;
        this.elements[59].Valetnost[1] = 3;
        this.elements[59].Valetnost[2] = 4;
        this.elements[59].Valetnost[3] = 5;
        this.elements[59].Valetnost[4] = 6;

        this.elements[60].Valetnost = [8];
        this.elements[60].Valetnost[0] = -1;
        this.elements[60].Valetnost[1] = 1;
        this.elements[60].Valetnost[2] = 2;
        this.elements[60].Valetnost[3] = 3;
        this.elements[60].Valetnost[4] = 4;
        this.elements[60].Valetnost[5] = 5;
        this.elements[60].Valetnost[6] = 6;
        this.elements[60].Valetnost[7] = 7;

        this.elements[60].Valetnost = [5];
        this.elements[60].Valetnost[0] = 2;
        this.elements[60].Valetnost[1] = 3;
        this.elements[60].Valetnost[2] = 4;
        this.elements[60].Valetnost[3] = 6;
        this.elements[60].Valetnost[4] = 8;

        this.elements[61].Valetnost = [5];
        this.elements[61].Valetnost[0] = 1;
        this.elements[61].Valetnost[1] = 2;
        this.elements[61].Valetnost[2] = 3;
        this.elements[61].Valetnost[3] = 4;
        this.elements[61].Valetnost[4] = 6;

        this.elements[62].Valetnost = [5];
        this.elements[62].Valetnost[0] = 1;
        this.elements[62].Valetnost[1] = 2;
        this.elements[62].Valetnost[2] = 3;
        this.elements[62].Valetnost[3] = 4;
        this.elements[62].Valetnost[4] = 6;

        this.elements[63].Valetnost = [3];
        this.elements[63].Valetnost[0] = 1;
        this.elements[63].Valetnost[1] = 2;
        this.elements[63].Valetnost[2] = 3;

        this.elements[64].Valetnost = [2];
        this.elements[64].Valetnost[0] = 1;
        this.elements[64].Valetnost[1] = 2;

        this.elements[65].Valetnost = [3];
        this.elements[65].Valetnost[0] = 1;
        this.elements[65].Valetnost[1] = 2;
        this.elements[65].Valetnost[2] = 3;

        this.elements[66].Valetnost = [2];
        this.elements[66].Valetnost[0] = 2;
        this.elements[66].Valetnost[1] = 4;

        this.elements[67].Valetnost = [5];
        this.elements[67].Valetnost[0] = -3;
        this.elements[67].Valetnost[1] = 2;
        this.elements[67].Valetnost[2] = 3;
        this.elements[67].Valetnost[3] = 4;
        this.elements[67].Valetnost[4] = 5;

        this.elements[68].Valetnost = [4];
        this.elements[68].Valetnost[0] = -2;
        this.elements[68].Valetnost[1] = 2;
        this.elements[68].Valetnost[2] = 4;
        this.elements[68].Valetnost[3] = 6;

        this.elements[69].Valetnost = [0];

        this.elements[70].Valetnost = [1];
        this.elements[70].Valetnost[0] = 0;

        this.elements[71].Valetnost = [0];

        this.elements[72].Valetnost = [1];
        this.elements[72].Valetnost[0] = 2;

        this.elements[73].Valetnost = [1];
        this.elements[73].Valetnost[0] = 3;

        this.elements[74].Valetnost = [1];
        this.elements[74].Valetnost[0] = 4;

        this.elements[75].Valetnost = [1];
        this.elements[75].Valetnost[0] = 5;

        this.elements[76].Valetnost = [5];
        this.elements[76].Valetnost[0] = 2;
        this.elements[76].Valetnost[1] = 3;
        this.elements[76].Valetnost[2] = 4;
        this.elements[76].Valetnost[3] = 5;
        this.elements[76].Valetnost[4] = 6;

        for (let i = 77; i < this.elements.length; i++)
            this.elements[i].Valetnost = [0];
    }

    PeriodANDgroupANDName()
    {
        for (let i = 0; i < this.elements.length; i++)
        {
            if (this.elements[i].numberofgroup == 1)
            {
                if (this.elements[i].symbol == "Cu" || this.elements[i].symbol == "Ag" || this.elements[i].symbol == "Au" || this.elements[i].symbol == "Rg")
                    this.elements[i].group = "B";
                else
                    this.elements[i].group = "A";
            }
            if (this.elements[i].numberofgroup == 2)
            {
                if (this.elements[i].symbol == "Zn" || this.elements[i].symbol == "Cd" || this.elements[i].symbol == "Hg" || this.elements[i].symbol == "Cn")
                    this.elements[i].group = "B";
                else
                    this.elements[i].group = "A";
            }
            if (this.elements[i].numberofgroup == 3)
            {
                if (this.elements[i].symbol == "Sc" || this.elements[i].symbol == "Y" || this.elements[i].symbol == "La" || this.elements[i].symbol == "Ac")
                    this.elements[i].group = "B";
                else
                    this.elements[i].group = "A";
            }
            if (this.elements[i].numberofgroup == 4)
            {
                if (this.elements[i].symbol == "Ti" || this.elements[i].symbol == "Zr" || this.elements[i].symbol == "Hf" || this.elements[i].symbol == "Rf")
                    this.elements[i].group = "B";
                else
                    this.elements[i].group = "A";
            }
            if (this.elements[i].numberofgroup == 5)
            {
                if (this.elements[i].symbol == "V" || this.elements[i].symbol == "Nb" || this.elements[i].symbol == "Ta" || this.elements[i].symbol == "Da")
                    this.elements[i].group = "B";
                else
                    this.elements[i].group = "A";
            }
            if (this.elements[i].numberofgroup == 6)
            {
                if (this.elements[i].symbol == "Cr" || this.elements[i].symbol == "Mo" || this.elements[i].symbol == "W" || this.elements[i].symbol == "Sg")
                    this.elements[i].group = "B";
                else
                    this.elements[i].group = "A";
            }
            if (this.elements[i].numberofgroup == 7)
            {
                if (this.elements[i].symbol == "Mn" || this.elements[i].symbol == "Tc" || this.elements[i].symbol == "Re" || this.elements[i].symbol == "Bh")
                    this.elements[i].group = "B";
                else
                    this.elements[i].group = "A";
            }
            if (this.elements[i].numberofgroup == 8)
            {
                if (this.elements[i].symbol == "Fe" || this.elements[i].symbol == "Co" || this.elements[i].symbol == "Ni" || this.elements[i].symbol == "Ru" || this.elements[i].symbol == "Rh" || this.elements[i].symbol == "Pd" || this.elements[i].symbol == "Os" || this.elements[i].symbol == "Ir" || this.elements[i].symbol == "Pt" || this.elements[i].symbol == "Hs" || this.elements[i].symbol == "Mt" || this.elements[i].symbol == "Ds")
                    this.elements[i].group = "B";
                else
                    this.elements[i].group = "A";
            }
            if (this.elements[i].numberofperiod <= 3)
                this.elements[i].period = "Small";
        }

        for (let i = 0; i < this.elements.length; i++)
        {
            if (this.elements[i].period != "Small")
                this.elements[i].period = "Big";
        }
    }

    constructor()
    {
        this.Init();
        this.PeriodANDgroupANDName();
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
                this.ResultText += this.Styles.styleHeaderText("Cechy\n</span><br><br>");
                this.ResultText +=  "Symbol atomu: " + this.Styles.styleAnswerBr(this.table.elements[i].symbol);
                this.ResultText += "Nazwa atomu: " + this.Styles.styleAnswerBr(this.table.elements[i].name);
                this.ResultText += "Numer sekwencji: " + this.Styles.styleAnswerBr(this.table.elements[i].number);
                this.ResultText += "Ar: " + this.Styles.styleAnswerBr(this.table.elements[i].Ar);
                if (this.table.elements[i].elUjemn != undefined)
                    this.ResultText += "Liczba elektroujemności: " + this.Styles.styleAnswerBr(this.table.elements[i].elUjemn);
                else
                    this.ResultText += "Liczba elektroujemności: " + " " + this.Styles.br();
                this.ResultText += "Metal/niemetal: " + this.Styles.styleAnswerBr(this.table.elements[i].metal);
                this.ResultText += "Grupa: " + this.Styles.styleAnswer(this.table.elements[i].numberofgroup);
                if (this.table.elements[i].group == "B")
                    this.ResultText += this.Styles.styleAnswerBr(" B");
                else
                    this.ResultText += this.Styles.styleAnswerBr(" A");
                this.ResultText += "Okres: " + this.Styles.styleAnswer(this.table.elements[i].numberofperiod);
    
                if (this.table.elements[i].period == "Small")
                    this.ResultText += this.Styles.styleAnswerBr(", mały");
                else
                    this.ResultText += this.Styles.styleAnswerBr(", duży");
    
                this.ResultText += "Liczba elektronów: " + this.Styles.styleAnswerBr(this.table.elements[i].number);
                this.ResultText += "Liczba protonów: " + this.Styles.styleAnswerBr(this.table.elements[i].number);
                this.ResultText += "Liczba neutronów: " + this.Styles.styleAnswerBr((parseInt(this.table.elements[i].Ar) - this.table.elements[i].number));
                this.ResultText += "Wyższe tlenki: ";
    
                if (this.table.elements[i].name != "Tlen")
                {
                    this.ResultText += this.Styles.styleAnswer(this.table.elements[i].symbol);
                    if (this.table.elements[i].numberofgroup == 1)
                        this.ResultText += this.Styles.styleAnswerBr("2O");
                    if (this.table.elements[i].numberofgroup == 2)
                        this.ResultText += this.Styles.styleAnswerBr("O");
                    if (this.table.elements[i].numberofgroup == 3)
                        this.ResultText += this.Styles.styleAnswerBr("2O<sub>3</sub>");
                    if (this.table.elements[i].numberofgroup == 4)
                        this.ResultText += this.Styles.styleAnswerBr("O<sub>2</sub>");
                    if (this.table.elements[i].numberofgroup == 5)
                        this.ResultText += this.Styles.styleAnswerBr("2O<sub>5</sub>");
                    if (this.table.elements[i].numberofgroup == 6)
                        this.ResultText += this.Styles.styleAnswerBr("O<sub>3</sub>");
                    if (this.table.elements[i].numberofgroup == 7)
                        this.ResultText += this.Styles.styleAnswerBr("2O<sub>7</sub>");
                    if (this.table.elements[i].numberofgroup == 8)
                        this.ResultText += this.Styles.styleAnswerBr("O<sub>4</sub>");
                    if (this.table.elements[i].numberofgroup == 8)
                        this.ResultText += "Lotne związki: " + this.Styles.br();
                }
                else
                    this.ResultText += this.Styles.br();
    
                if (this.table.elements[i].numberofgroup > 3)
                {
                    if (this.table.elements[i].numberofgroup == 4)
                    {
                        this.ResultText += "Lotne związki: " + this.Styles.styleAnswer(this.table.elements[i].symbol);
                        this.ResultText += this.Styles.styleAnswerBr("H<sub>4</sub>");
                    }
                    if (this.table.elements[i].numberofgroup == 5)
                    {
                        this.ResultText += "Lotne związki: " + this.Styles.styleAnswer(this.table.elements[i].symbol);
                        this.ResultText += this.Styles.styleAnswerBr("H<sub>3</sub>");
                    }
                    if (this.table.elements[i].numberofgroup == 6)
                    {
                        this.ResultText += "Lotne związki: " + this.Styles.styleAnswer("H<sub>2</sub>");
                        this.ResultText += this.Styles.styleAnswerBr(this.table.elements[i].symbol);
                    }
                    if (this.table.elements[i].numberofgroup == 7)
                    {
                        this.ResultText += "Lotne związki: " + this.Styles.styleAnswer("H");
                        this.ResultText += this.Styles.styleAnswerBr(this.table.elements[i].symbol);
                    }
                }
                else
                    this.ResultText += "Lotne związki: " + this.Styles.br();
    
                let res = "";
                res = " " + this.table.SPDF(this.table.elements[i].number);
                this.ResultText += "Elektroniczna Konfiguracja:" + this.Styles.br() + this.Styles.styleRes(res) + this.Styles.br();
                this.ResultText += "Wartościowość: ";
                for (let j = 0; j < this.table.elements[i].Valetnost.length; j++) 
                    this.ResultText += this.Styles.styleAnswer(this.table.elements[i].Valetnost[j]) + " ";
                this.ResultText += this.Styles.twoBr();
                this.ResultText += this.Styles.styleHeaderText("Graficzna konfiguracja\n\n");
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
        document.getElementsByClassName("result")[0].style.height = "1860px";
        document.getElementById("graphicKonf").style.height = "500px";
        document.getElementById("graphicKonf").style.visibility = "visible";
        let images = document.getElementsByClassName("graphicImg");
        let graphic = new Graphic(images, table);
        graphic.clearGraphic();
        graphic.drawGraphic();
    }
}