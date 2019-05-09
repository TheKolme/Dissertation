// here we are stating what information a product will have.
// this is also the format of the information.
export class Product {
    public id: number = 0;

    public name: string = '';

    public description: string = '';

    public size: string = 'M';

    public material: string = 'Cotton';

    public price: number = 10;

    public color: string = '#ffffff';

    public image = [];
}

// what are the products?
export var products: Product[] = [
    {
        id: 1,
        name: 'shirt 1',
        description: '1 The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        size: 'M',
        material: 'Cotton',
        price: 10,
        color: 'primary',
        image: ['1.jpg', '1-1.jpg', '1-2.jpg', '1-3.jpg', '1-4.jpg']
    },
    {
        id: 2,
        name: 'shirt 2',
        description: '2 The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        size: 'S',
        material: 'Denim',
        price: 20,
        color: 'warning',
        image: ['2.jpg', '2-1.jpg', '2-2.jpg', '2-3.jpg', '2-4.jpg']
    },
    {
        id: 3,
        name: 'shirt 3',
        description: '3 The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        size: 'L',
        material: 'Wool',
        price: 30,
        color: 'warning',
        image: ['3.jpg', '3-1.jpg', '3-2.jpg', '3-3.jpg', '3-4.jpg']
    },
    {
        id: 4,
        name: 'shirt 4',
        description: '4 The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        size: 'XL',
        material: 'Leather',
        price: 40,
        color: 'warning',
        image: ['4.jpg', '4-1.jpg', '4-2.jpg', '4-3.jpg', '4-4.jpg', '4-5.jpg']
    },
    {
        id: 5,
        name: 'shirt 5',
        description: '5 The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        size: 'S',
        material: 'Fur',
        price: 50,
        color: 'warning',
        image: ['5.jpg', '5-1.jpg', '5-2.jpg']
    },
    {
        id: 6,
        name: 'shirt 6',
        description: '6 The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        size: 'M',
        material: 'Silk',
        price: 60,
        color: 'danger',
        image: ['6.jpg', '6-1.jpg', '6-2.jpg']
    },
    {
        id: 7,
        name: 'shirt 7',
        description: '7 The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        size: 'L',
        material: 'Wool',
        price: 30,
        color: 'success',
        image: ['7.jpg', '7-1.jpg', '7-2.jpg']
    },
    {
        id: 8,
        name: 'shirt 8',
        description: '8 The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        size: 'XS',
        material: 'Denim',
        price: 10,
        color: 'warning',
        image: ['8.jpg', '8-1.jpg', '8-2.jpg']
    },
    {
        id: 9,
        name: 'shirt 9',
        description: '9 The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        size: 'XS',
        material: 'Denim',
        price: 10,
        color: 'warning',
        image: ['9.jpg', '9-1.jpg', '9-2.jpg', '9-3.jpg']
    },
    {
        id: 10,
        name: 'shirt 10',
        description: '10 The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        size: 'XS',
        material: 'Denim',
        price: 10,
        color: 'warning',
        image: ['10.jpg', '10-1.jpg', '10-2.jpg', '10-3.jpg']
    },
    {
        id: 11,
        name: 'shirt 11',
        description: '11 The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        size: 'XS',
        material: 'Denim',
        price: 10,
        color: 'warning',
        image: ['11.jpg', '11-1.jpg', '11-2.jpg']
    },
    {
        id: 12,
        name: 'shirt 12',
        description: '12 The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        size: 'XS',
        material: 'Denim',
        price: 10,
        color: 'warning',
        image: ['12.jpg', '12-1.jpg', '12-2.jpg', '12-3.jpg']
    }

];
