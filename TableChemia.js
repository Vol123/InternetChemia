class Element
{
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

class TableChemia
{
    metal = "Metal";
    nemetal = "Nemetal";

    elements = [];
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

        // ----------------------------------------
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
    
    constructor()
    {
        this.Graphics = [7, 5];
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

    str = ["1s", "2s", "2p", "3s", "3p", "4s", "3d", "4p", "5s", "4d", "5p", "6s", "5d", "4f", "6p", "7s", "6d", "5f", "7p"];
    numbers = [2, 2, 6, 2, 6, 2, 10, 6, 2, 10, 6, 2, 10, 14, 6, 2, 10, 14, 6];
    Level = [1, 2, 2, 3, 3, 4, 3, 4, 5, 4, 5, 6, 5, 4, 6, 7, 6, 5, 7];
    Numbers = [this.numbers.length];
    Graphics = [7, 5];

    InitGraphics()
    {
        this.Graphics[0, 4] = 1;
        this.Graphics[1, 4] = 2;
        this.Graphics[2, 4] = 3;
        this.Graphics[3, 4] = 4;
        this.Graphics[4, 4] = 4;
        this.Graphics[5, 4] = 3;
        this.Graphics[6, 4] = 2;
    }
    InitNumbers(number)
    {
        this.InitGraphics();
        let time = number;
        let i = 0;
        while(true)
        {
            if (i >= this.numbers.length)
                break;
            if (time >= this.numbers[i] && i < this.numbers.length)
            {
                time = time - this.numbers[i];
                this.Numbers[i] = this.numbers[i];
                i++;
            }
            else
            {
                this.Numbers[i] = time;
                break;
            }
        }
        
        for (let k = 1; k <= 7; k++)
        {
            let j = 0;
            for (let i = 0; i < this.Numbers.length; i++)
            {
                if (this.Level[i] == k)
                {
                    this.Graphics[k - 1, j] = this.Numbers[i];
                    j++;
                }
            }
        }
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

let table = new TableChemia();
table.Init();
table.Valetnost();
table.PeriodANDgroupANDName();

function styleAnswer(Text) {
    return "<span style=\"color: black; font-size: 25px; letter-spacing: 0px; word-spacing: 1px; font-weight: bold;\">" + Text + "</span>";
}

function getText(Text) {
    let TextofResult = "";
    for (let i = 0; i < table.elements.length; i++) {
        if (table.elements[i].symbol.toString().toLowerCase() == Text.toString().toLowerCase() || 
            table.elements[i].name.toString().toLowerCase() == Text.toString().toLowerCase()) {
            TextofResult +=  "Symbol atomu: " + styleAnswer(table.elements[i].symbol) + "\n";
            TextofResult += "Nazwa atomu: " + styleAnswer(table.elements[i].name) + "\n";
            TextofResult += "Numer sekwencji: " + styleAnswer(table.elements[i].number) + "\n";
            TextofResult += "Ar: " + styleAnswer(table.elements[i].Ar) + "\n";
            if (table.elements[i].elUjemn != undefined)
                TextofResult += "Liczba elektroujemności: " + styleAnswer(table.elements[i].elUjemn) + "\n";
            else
                TextofResult += "Liczba elektroujemności: " + " " + "\n";
            TextofResult += "Metal/niemetal: " + styleAnswer(table.elements[i].metal) + "\n";
            TextofResult += "Grupa: " + styleAnswer(table.elements[i].numberofgroup);
            if (table.elements[i].group == "B")
                TextofResult += styleAnswer(" B") + "\n";
            else
                TextofResult += styleAnswer(" A") + "\n";
            TextofResult += "Okres: " + styleAnswer(table.elements[i].numberofperiod);

            if (table.elements[i].period == "Small")
                TextofResult += styleAnswer(", mały") + "\n";
            else
                TextofResult += styleAnswer(", duży") + "\n";

            TextofResult += "Liczba elektronów: " + styleAnswer(table.elements[i].number) + "\n";
            TextofResult += "Liczba protonów: " + styleAnswer(table.elements[i].number) + "\n";
            TextofResult += "Liczba neutronów: " + styleAnswer((parseInt(table.elements[i].Ar) - table.elements[i].number)) + "\n";
            TextofResult += "Wyższe tlenki: ";

            if (table.elements[i].name != "Tlen")
            {
                TextofResult += styleAnswer(table.elements[i].symbol);
                if (table.elements[i].numberofgroup == 1)
                    TextofResult += styleAnswer("2O") + "\n";

                if (table.elements[i].numberofgroup == 2)
                    TextofResult += styleAnswer("O") + "\n";

                if (table.elements[i].numberofgroup == 3)
                    TextofResult += styleAnswer("2O<sub>3</sub>") + "\n";

                if (table.elements[i].numberofgroup == 4)
                    TextofResult += styleAnswer("O<sub>2</sub>") + "\n";

                if (table.elements[i].numberofgroup == 5)
                    TextofResult += styleAnswer("2O<sub>5</sub>") + "\n";

                if (table.elements[i].numberofgroup == 6)
                    TextofResult += styleAnswer("O<sub>3</sub>") + "\n";

                if (table.elements[i].numberofgroup == 7)
                    TextofResult += styleAnswer("2O<sub>7</sub>") + "\n";

                if (table.elements[i].numberofgroup == 8)
                    TextofResult += styleAnswer("O<sub>4</sub>") + "\n";

                if (table.elements[i].numberofgroup == 8)
                    TextofResult += "Lotne związki: " + "\n";
            }
            else
            {
                TextofResult += "\n";
            }

            if (table.elements[i].numberofgroup > 3)
            {
                if (table.elements[i].numberofgroup == 4)
                {
                    TextofResult += "Lotne związki: " + styleAnswer(table.elements[i].symbol);
                    TextofResult += styleAnswer("H<sub>4</sub>") + "\n";
                }
                if (table.elements[i].numberofgroup == 5)
                {
                    TextofResult += "Lotne związki: " + styleAnswer(table.elements[i].symbol);
                    TextofResult += styleAnswer("H<sub>3</sub>") + "\n";
                }
                if (table.elements[i].numberofgroup == 6)
                {
                    TextofResult += "Lotne związki: " + styleAnswer("H<sub>2</sub>");
                    TextofResult += styleAnswer(table.elements[i].symbol) + "\n";
                }
                if (table.elements[i].numberofgroup == 7)
                {
                    TextofResult += "Lotne związki: " + styleAnswer("H");
                    TextofResult += styleAnswer(table.elements[i].symbol) + "\n";
                }
            }
            else
                TextofResult += "Lotne związki: " + "\n";

            let res = "";
            res = table.SPDF(table.elements[i].number);
            TextofResult += "Elektroniczna Konfiguracja:\n<span style=\"letter-spacing: 0px; word-spacing: 0px; color: black; font-weight: bold;\">" + res + "\n</span>";
            TextofResult += "Wartościowość: ";
            for (let j = 0; j < table.elements[i].Valetnost.length; j++) 
                TextofResult += styleAnswer(table.elements[i].Valetnost[j]) + " ";
            TextofResult += "\n";
            TextofResult += "Graficzna konfiguracja:\n";
            break;
        }
    }

    return TextofResult;
}

function writeText() {
    document.getElementById("TextofResult").innerHTML = getText(document.getElementsByClassName("GetTextBySymbol")[0].value);
}

/*
max = [1, 3, 5, 7];
table.InitNumbers(table.elements[i].Number);

let cell = 0;
for (let i = 0; i < 7; i++)
{
    if (table.Graphics[i, 0] == 0)
        break;

    for (let j = 0; j < table.Graphics[i, 4]; j++)
    {
        let temp = table.Graphics[i, j] / 2;
        for (let k = 0; k < temp; k++)
        {
            pictures[cell].Image = Image.FromFile("Sounds/1.png");
            cell++;
        }
        if (temp * 2 != table.Graphics[i, j])
        {
            pictures[cell].Image = Image.FromFile("Sounds/2.png");
            cell -= (table.Graphics[i, j] + 1) / 2;
            cell += max[j] + 1;
            continue;
        }

        cell -= temp;
        cell += max[j];
    }
}
*/