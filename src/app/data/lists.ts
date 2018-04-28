import { ListItemModel } from '../model/list/list-item';
import { QuoteModel } from '../model/quote/quote';



export const WORKOUT_LIST: ListItemModel[] = [
    new ListItemModel(
      'Effective and easy-to-do 30 minute workouts to reshape your body.',
      'assets/icons/gs-icon-timer.png'),
    new ListItemModel(
        'A perfect combination of strength, endurance and motion to get you fit and lean.',
        'assets/icons/gs-icon-notes.png'),
    new ListItemModel(
        'Train anywhere anytime at your pace - with no equipment, just your body weight.',
        'assets/icons/gs-icon-weights.png'),
    new ListItemModel(
        'Weekly fun workout challenges to keep you motivated and see your progress.',
        'assets/icons/gs-icon-progress.png'),
];



export const NUTRITION_LIST: ListItemModel[] = [
    new ListItemModel(
        'Meal plans specifically tailored to your workouts.',
        'assets/icons/gs-icon-scales.png'),
    new ListItemModel(
        'More than 50 healthy recipes and tips on how to eat out.',
        'assets/icons/gs-icon-recipes.png'),
    new ListItemModel(
        'Quick and easy to cook (delicious dishes) in less than 30 minutes.',
        'assets/icons/gs-icon-diet.png'),
    new ListItemModel(
        'Weekly Challenges like a food diary to eliminate bad eating habits.',
        'assets/icons/gs-icon-notes.png'),
];



export const COMMUNITY_LIST: ListItemModel[] = [
    new ListItemModel(
        'Weekly motivation by our team to stay on track to get that sexy look.',
        'assets/icons/gs-icon-scales.png'),
    new ListItemModel(
        'Share your experiences, tricks and tips with our "no boys allowed" community.',
        'assets/icons/gs-icon-recipes.png'),
    new ListItemModel(
        'Keep track of your journey with weekly progress pics.',
        'assets/icons/gs-icon-diet.png'),
];



export const QUOTES_LIST: QuoteModel[] = [
    new QuoteModel(
        'This is my incredible quote. Such wisdom',
        'Mr. Golden Bananas',
        'assets/icons/gs-icon-notes.png'),
];
