interface methines{
    carbonCount: number;
    hydrogenCount: number;
}
class C2H4 implements methines {
    readonly carbonCount: number = 2;
    readonly hydrogenCount: number = 4;
}

class C6H8 implements methines {
    readonly carbonCount: number = 6;
    readonly hydrogenCount: number = 8;
}

class C14H16 implements methines {
    readonly carbonCount: number = 14;
    readonly hydrogenCount: number = 16;
}
console.log('CH2','C6H8','C14H16')
