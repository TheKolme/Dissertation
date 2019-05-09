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
        name: 'Black Velvet Skirt',
        description: 'This skirt has metal snaps in front of the skirt',
        size: 'M',
        material: 'Velvet',
        price: 10,
        color: 'warning',
        image: ['1.jpg', '1-1.jpg', '1-2.jpg', '1-3.jpg', '1-4.jpg']
    },
    {
        id: 2,
        name: 'Green long dress with flowers',
        description: 'This dress is long, has a zipper on the side. It also has spaghetti straps.',
        size: 'L',
        material: 'Polyester',
        price: 20,
        color: 'success',
        image: ['2.jpg', '2-1.jpg', '2-2.jpg', '2-3.jpg', '2-4.jpg']
    },
    {
        id: 3,
        name: 'Grey sweatshirt',
        description: 'This is knitted grey sweatshirt',
        size: 'L',
        material: 'Acrylick',
        price: 10,
        color: 'medium',
        image: ['3.jpg', '3-1.jpg', '3-2.jpg']
    },
    {
        id: 4,
        name: 'T-shirt with plants',
        description: 'This is MORE WATER PLEASE t-shirt with a print of plants.',
        size: 'S',
        material: 'Cotton',
        price: 10,
        color: 'light',
        image: ['4.jpg', '4-1.jpg', '4-2.jpg', '4-3.jpg', '4-4.jpg', '4-5.jpg']
    },
    {
        id: 5,
        name: 'Black Leather Bag',
        description: 'This leather bag has three pockets in the front. ',
        size: 'M',
        material: 'Leather',
        price: 50,
        color: 'warning',
        image: ['5.jpg', '5-1.jpg', '5-2.jpg']
    },
    {
        id: 6,
        name: 'Blue Denim Jeans',
        description: 'These blue jeans are slim fit',
        size: 'L',
        material: 'Denim',
        price: 40,
        color: 'primary',
        image: ['6.jpg', '6-1.jpg', '6-2.jpg']
    },
    {
        id: 7,
        name: 'White shoes',
        description: 'White leather shoes with pink accent',
        size: '40',
        material: 'Leather',
        price: 40,
        color: 'light',
        image: ['7.jpg', '7-1.jpg', '7-2.jpg']
    },
    {
        id: 8,
        name: 'White Men t-shirt',
        description: 'White t-shirt with red.',
        size: 'S',
        material: 'Cotton',
        price: 10,
        color: 'light',
        image: ['8.jpg', '8-1.jpg', '8-2.jpg']
    },
    {
        id: 9,
        name: 'Shirt with croissants',
        description: 'This t-shirt has black stripes and croissants.',
        size: 'S',
        material: 'Cotton',
        price: 10,
        color: 'light',
        image: ['9.jpg', '9-1.jpg', '9-2.jpg', '9-3.jpg']
    },
    {
        id: 10,
        name: 'Black t-shirt',
        description: 'Black t-shirt with Fortnite dance.',
        size: 'XS',
        material: 'Cotton',
        price: 10,
        color: 'warning',
        image: ['10.jpg', '10-1.jpg', '10-2.jpg', '10-3.jpg']
    },
    {
        id: 11,
        name: 'Dream On sweatshirt',
        description: 'This is a doodle sweatshirt.',
        size: 'M',
        material: 'Cotton',
        price: 10,
        color: 'light',
        image: ['11.jpg', '11-1.jpg', '11-2.jpg', '11-3.jpg', '11-4.jpg']
    },
    {
        id: 12,
        name: 'Grey mom jeans',
        description: 'These are grey denim mom jeans.',
        size: 'L',
        material: 'Denim',
        price: 30,
        color: 'medium',
        image: ['12.jpg', '12-1.jpg', '12-2.jpg', '12-3.jpg']
    }

];
