import { LinkedList } from './LinkedList';
import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';

const numberCollection = new NumbersCollection([10, 3, -1, -7]);
numberCollection.sort();

console.log(numberCollection.data);

const characterCollection = new CharactersCollection('CdAwz');
characterCollection.sort();

console.log(characterCollection.data);

const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(2);
linkedList.add(-10);
linkedList.add(88);

linkedList.sort();
linkedList.print();
