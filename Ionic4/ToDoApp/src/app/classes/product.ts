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
        description: 'This a front button up skirt in black velvet. ',
        size: 'M',
        material: 'Velvet',
        price: 10,
        color: 'warning',
        image: ['1.jpg', '1-1.jpg', '1-2.jpg', '1-3.jpg', '1-4.jpg']
    },
    {
        id: 2,
        name: 'Green long dress with flowers',
        description: 'Long floral design dress, with spaghetti straps and side zipper.',
        size: 'L',
        material: 'Polyester',
        price: 10,
        color: 'success',
        image: ['2.jpg', '2-1.jpg', '2-2.jpg', '2-3.jpg', '2-4.jpg']
    },
    {
        id: 3,
        name: 'Grey sweatshirt',
        description: 'Loose fitting knitted grey sweatshirt. ',
        size: 'L',
        material: 'Acrylic',
        price: 10,
        color: 'medium',
        image: ['13.jpg', '3.jpg', '3-2.jpg']
    },
    {
        id: 4,
        name: 'T-shirt with plants',
        description: 'More Water Please t-shirt with potted plants print.',
        size: 'S',
        material: 'Cotton',
        price: 10,
        color: 'light',
        image: ['4.jpg', '4-1.jpg', '4-2.jpg', '4-3.jpg', '4-4.jpg', '4-5.jpg']
    },
    {
        id: 5,
        name: 'Black Leather Bag',
        description: 'Leather backpack with 3 front pockets and large interior pocket. ',
        size: 'M',
        material: 'Leather',
        price: 10,
        color: 'warning',
        image: ['5.jpg', '5-1.jpg', '5-2.jpg']
    },
    {
        id: 6,
        name: 'Blue Denim Jeans',
        description: 'Slim fit blue jeans.',
        size: 'L',
        material: 'Denim',
        price: 10,
        color: 'primary',
        image: ['6.jpg', '6-1.jpg', '6-2.jpg']
    },
    {
        id: 7,
        name: 'White shoes',
        description: 'White leather slip-on shoes with pink accent.',
        size: '40',
        material: 'Leather',
        price: 10,
        color: 'light',
        image: ['7.jpg', '7-1.jpg', '7-2.jpg']
    },
    {
        id: 8,
        name: 'White Men t-shirt',
        description: 'White t-shirt with red Adidas logo.',
        size: 'S',
        material: 'Cotton',
        price: 10,
        color: 'light',
        image: ['8.jpg', '8-1.jpg', '8-2.jpg']
    },
    {
        id: 9,
        name: 'Shirt with croissants',
        description: 'White striped t-shirt with croissants print.',
        size: 'S',
        material: 'Cotton',
        price: 10,
        color: 'light',
        image: ['9.jpg', '9-1.jpg', '9-2.jpg', '9-3.jpg']
    },
    {
        id: 10,
        name: 'Black t-shirt',
        description: 'Black Fortnite t-shirt.',
        size: 'XS',
        material: 'Cotton',
        price: 10,
        color: 'warning',
        image: ['17.jpg', '10.jpg', '10-1.jpg', '10-2.jpg', '10-3.jpg']
    },
    {
        id: 11,
        name: 'Dream On sweatshirt',
        description: 'Cropped sweatshirt with cute doodles print.',
        size: 'M',
        material: 'Cotton',
        price: 10,
        color: 'light',
        image: ['11.jpg', '11-1.jpg', '11-2.jpg', '11-3.jpg', '11-4.jpg']
    },
    {
        id: 12,
        name: 'Grey mom jeans',
        description: 'Loose fit grey mom jeans.',
        size: 'L',
        material: 'Denim',
        price: 10,
        color: 'medium',
        image: ['12.jpg', '12-1.jpg', '12-2.jpg', '12-3.jpg']
    },
    {
        id: 13,
        name: 'Black Men Shirt and Shorts',
        description: 'Sri Lanka black t-shirt with bright accents and black shorts.',
        size: 'S',
        material: 'Cotton',
        price: 10,
        color: 'warning',
        image: ['15.jpg', '15-1.jpg', '15-2.jpg', '15-3.jpg', '15-4.jpg']
    },
    {
        id: 14,
        name: 'Grey T-shirt',
        description: 'Grey loose fitting t-shirt with tiny black dots.',
        size: 'XL',
        material: 'Cotton',
        price: 10,
        color: 'medium',
        image: ['16.jpg', '16-1.jpg', '16-2.jpg']
    },
    {
        id: 15,
        name: 'Blue Men Jeans',
        description: 'Blue faded jeans tight fit.',
        size: 'S',
        material: 'Denim',
        price: 10,
        color: 'primary',
        image: ['18.jpg', '18-1.jpg', '18-2.jpg']
    },
    {
        id: 16,
        name: 'White Men T-shirt',
        description: 'Manhattan print white t-shirt.',
        size: 'S',
        material: 'Cotton',
        price: 10,
        color: 'light',
        image: ['19.jpg', '19-1.jpg', '19-2.jpg']
    },
    {
        id: 17,
        name: 'Light blue men shorts',
        description: 'Light blue shorts above the knee fit.',
        size: 'S',
        material: 'Polyester',
        price: 10,
        color: 'primary',
        image: ['20.jpg', '20-1.jpg', '20-2.jpg']
    }

];
