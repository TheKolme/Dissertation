// here we are stating what information a product will have.
// this is also the format of the information.
export class Product {
    public name: string = '';

    public description: string = '';

    public size: string = 'M';

    public material: string = 'Cotton';

    public price: string = '€10';

    public color: string = '#ffffff';

    public image = [];
}

// what are the products?
export var products: Product[] = [
    {
        name: 'shirt 1',
        description: 'this piece 1',
        size: 'M',
        material: 'Cotton',
        price: '€10',
        color: '#ffffff',
        image: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
    },
    {
        name: 'shirt 2',
        description: 'this piece 2',
        size: 'S',
        material: 'Denim',
        price: '€20',
        color: '#ffff4f',
        image: ['6.jpg', '7.jpg', '8.jpg', '4.jpg', '5.jpg']
    },
    {
        name: 'shirt 3',
        description: 'this piece 3',
        size: 'L',
        material: 'Wool',
        price: '€30',
        color: '#f5ff4f',
        image: ['2.jpg', '5.jpg', '8.jpg', '4.jpg', '5.jpg']
    },
    {
        name: 'shirt 4',
        description: 'this piece 4',
        size: 'XL',
        material: 'Leather',
        price: '€40',
        color: '#f50f4f',
        image: ['1.jpg', '3.jpg', '8.jpg', '4.jpg', '5.jpg']
    },
    {
        name: 'shirt 5',
        description: 'this piece 5',
        size: 'S',
        material: 'Fur',
        price: '€50',
        color: '#f5034f',
        image: ['8.jpg', '1.jpg', '8.jpg', '4.jpg', '5.jpg']
    },
    {
        name: 'shirt 6',
        description: 'this piece 6',
        size: 'M',
        material: 'Silk',
        price: '€60',
        color: '#f50f40',
        image: ['6.jpg', '7.jpg', '8.jpg', '4.jpg', '5.jpg']
    },
    {
        name: 'shirt 7',
        description: 'this piece 7',
        size: 'L',
        material: 'Wool',
        price: '€30',
        color: '#f50f50',
        image: ['4.jpg', '3.jpg', '2.jpg', '4.jpg', '5.jpg']
    },
    {
        name: 'shirt 8',
        description: 'this piece 8',
        size: 'XS',
        material: 'Denim',
        price: '€10',
        color: '#f60f4f',
        image: ['3.jpg', '1.jpg', '5.jpg', '4.jpg', '5.jpg']
    }

];
