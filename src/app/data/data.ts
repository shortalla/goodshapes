import { SectionDataModel } from '../model/section/section-data';
import { ListItemModel } from '../model/list/list-item';
import { QuoteModel } from '../model/quote/quote';
import { PriceModel } from '../model/price/price';



export const HEADER_DATA: SectionDataModel = {
    id:           'header',
    firstHeader:  'Feel Good.',
    secondHeader: 'Look Good.',
    text:         'Achieve your personal body goals and get fitter, look and feel better with our workouts and recipes.',
    list: [{
        text:     'Tailored to you',
        imageUrl: 'assets/icons/icon-tailored.svg'
    }, {
        text:     'Easy and Effective Workouts',
        imageUrl: 'assets/icons/icon-recipes.svg',
    }, {
        text:     'Anywhere, Anytime',
        imageUrl: 'assets/icons/icon-equipment.svg'
    }, {
        text:     '50+ Healthy Recipes',
        imageUrl: 'assets/icons/icon-equipment.svg'
    }, {
        text:     'Daily Motivation',
        imageUrl: 'assets/icons/icon-fast-workout.svg'
    }],
};



export const WORKOUT_DATA: SectionDataModel = {
    id:           'workout',
    firstHeader:  'Get fit? Get Lean?',
    secondHeader: 'No Problem!',
    text:         'Our personalised workouts with step-by-step instructions will get you in shape in no time...well actually in 14 weeks.',
    list: [{
        text:     'Effective and easy-to-do 30 minute workouts to reshape your body.',
        imageUrl: 'assets/icons/gs-icon-timer.png'
    }, {
        text:     'A perfect combination of strength, endurance and motion to get you fit and lean.',
        imageUrl: 'assets/icons/gs-icon-notes.png',
    }, {
        text:     'Train anywhere anytime at your pace - with no equipment, just your body weight.',
        imageUrl: 'assets/icons/gs-icon-weights.png'
    }, {
        text:     'Weekly fun workout challenges to keep you motivated and see your progress.',
        imageUrl: 'assets/icons/gs-icon-progress.png'
    }],
};



export const NUTRITION_DATA: SectionDataModel = {
    id:           'nutrition',
    firstHeader:  'It\'s not a diet.',
    secondHeader: 'It\'s a way of life.',
    text:         'The goodshapes nutrition guide helps you to establish a healthy (and sustainable) lifestyle to achieve you fitness goals!',
    list: [{
        text:     'Meal plans specifically tailored to your workouts.',
        imageUrl: 'assets/icons/gs-icon-scales.png',
    }, {
        text:     'More than 50 healthy recipes and tips on how to eat out.',
        imageUrl: 'assets/icons/gs-icon-recipes.png',
    }, {
        text:     'Quick and easy to cook (delicious dishes) in less than 30 minutes.',
        imageUrl: 'assets/icons/gs-icon-diet.png',
    }, {
        text:     'Weekly Challenges like a food diary to eliminate bad eating habits.',
        imageUrl: 'assets/icons/gs-icon-notes.png',
    }],
};



export const COMMUNITY_DATA: SectionDataModel = {
    id:           'community',
    firstHeader:  'Don\'t do it alone.',
    secondHeader: 'Join our community!',
    text:         'Find support and be motivated by thousands of women around the world on your fitness journey.',
    list: [{
        text:     'Weekly motivation by our team to stay on track to get that sexy look.',
        imageUrl: 'assets/icons/icon-equipment.svg',
    }, {
        text:     'Share your experiences, tricks and tips with our "no boys allowed" community.',
        imageUrl: 'assets/icons/icon-recipes.svg',
    }, {
        text:     'Keep track of your journey with weekly progress pic.',
        imageUrl: 'assets/icons/icon-recipes.svg',
    }],
};



export const GUIDE_DATA: SectionDataModel = {
    id:           'guide',
    firstHeader:  'One Good Guide',
    secondHeader: 'One Great You',
    text:         'Good Shapes is more than a diet. It\'s more than a lifestyle. It\'s a commitment to finding your fiercest, most self-loving and most body-positive you. Join women from around the world in achieving your personal body and fitness goals with our guide - no matter what shape or size.',
    list: [{
        heading:  'Get Fit & Toned',
        text:     'Strengthen your muscles, target your problem area, and build a body you\'re proud of.',
        imageUrl: 'assets/icons/gs-icon-progress.png',
    }, {
        heading:  'Feel Good & Sexy',
        text:     'No matter your shape or size if you train hard, eat well, you will feel great (inside and out).',
        imageUrl: 'assets/icons/gs-icon-progress.png',
    }, {
        heading:  'Be Happy & Proud',
        text:     'With our proper nutrition, training, and guidance, you will achieve long lasting health and fitness results',
        imageUrl: 'assets/icons/gs-icon-progress.png',
    }],
};



export const QUOTES_DATA: QuoteModel[] = [
    {
        quote:    'This is my incredible quote. Such wisdom',
        source:   'Mr. Golden Bananas',
        imageUrl: 'assets/icons/gs-icon-notes.png',
    },
];



export const PRICE_DATA: PriceModel = {
    description: 'Full 15 week program',
    subtext:     'only 2,80€ per week!',
    oldPrice:    '49€',
    price:       '39€'
};
