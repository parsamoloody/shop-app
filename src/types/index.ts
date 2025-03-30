type SubCategory = {
    subCategories: {
        id: number;
        name: string;
        link: string;
    };
}

type Menu = {
    menu: {
        id: number;
        name: string;
        link: string;
        subCategories: SubCategory[];
    };
}

type StoryCategory = {
    id: number;
    name: string;
    link: string;
    image: string;
};

type Discount = {
    discountPercentage: number;
    limitTime: string;
    isDiscount: boolean;
};

type MainFeature = {
    key: string;
    value: string;
};

type Image = {
    src: string;
    alt: string;
    description: string;
    main: boolean;
};

type Inventory = {
    quantity: number;
    sold: number;
};

type Category = {
    id: number;
    name: string;
};


export interface Product {
    id: number;
    name: string;
    price: number;
    discount: Discount;
    colors: string[];
    mainFeatures: MainFeature[];
    images: Image[];
    inventory: Inventory;
    category: Category;
}

export interface Data {
    data: {
        menu: Menu[];
        storyCategory: StoryCategory[];
        products: Product[];
    }
}