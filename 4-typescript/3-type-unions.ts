// Now let's move on to another way of combining the types: UNIONS
type Dog = {breed: string};
type Cat = {breed: string};
type Bird = {sings: boolean};
type Insect = {venomous: boolean};

type Animal = Dog | Cat | Bird | Insect;
// Note the difference between intersection (&) and union (|)
// Intersection COMBINES the types, saying like: this large type should "match" ALL of these.
// But UNION says: ONE OF THESE types should match.
// So it's exactly as AND and OR,  hence the symbols  & and |.

// You probably know the unions from Redux with Typescript, 
// where the Action definition might look like this:
type Action = OpenPopup | ClosePopup | ReloadPage;


// Note that it's absolutely OK to use string literals for typechecking:
type DogBreed = 'Corgi' | 'Husky';
type Dog {
  breed: DogBreed;
}


// Unions are VERY useful! how exactly?
// Let's have an example.
// Imagine a situation when you have a piece of component state:
const form = {
  success: false,
  error: 'Something went wrong!'
}

// It can be either success or error.  If there's an error,  there can't be any success, right?
// How to do it?

type SuccessState = {
  success: true
}

type ErrorState = {
  success: false,
  error: 'Something went wrong!'
}

type FormState = SuccessState | ErrorState;

const form: FormState = {
  success: true,
  error: 'Ooops!'
};


// Ok, now...
function submit(form: FormState) {
  from.
}
// You see that there's only the "success" prop. Because it's common, and TS can guarantee that it's there in any case -- Typesafety!  preventing errors.  What to do?
// We need to _narrow_ the type:
function submit(form: FormState) {
  if ('error' in form) {
  } else {
  }
}

// OR  we could use a discriminant prop:  a prop that is present on all types of the union,
// but is uniquely different


// Let's have another example to make it clear:
type Circle = {
  // kind: 'circle';  // discriminant property
  radius: number;
}

type Square = {
  // kind: 'square';
  sideLength: number;
}

type Shape = Circle | Square;
// ...


function getArea(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;

      (parameter) shape: Circle
    case 'square':
      return shape.sideLength ** 2;

      (parameter) shape: Square
  }
}

// Note how again it allowed us to NARROW down the type to a concrete one


https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions
// Let's talk more about this "narrowing" of the types.  Or also it's called type inference -- the type is inferred from circumstances
