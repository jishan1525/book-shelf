
let booksData = []


const getBooks = async () => {
  try {
    const response = await fetch("https://book-shelf-backend.vercel.app/books");
    const data = await response.json();
    console.log("Before",data.data)
    booksData = data.data; 
    console.log("Books fetched:", booksData);
  } catch (error) {
    console.error("Error fetching books:", error);
  }
};

getBooks();


// export const addBook = async (book) => {
//   try {
//     const response = await fetch(`${API_URL}/addBook`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(book),
//     });
//     const data = await response.json();
//     return data.data;
//   } catch (error) {
//     console.error("Error adding book:", error);
//   }
// };

// const booksData = [
//   {
//     id: 1,
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     genre: "Fiction",
//     costPrice: 499,
//     sellingPrice: 399,
//     image: "https://i.pinimg.com/736x/37/05/bc/3705bc85fda7bf4d3d6957cbee610654.jpg",
//     description:
//       "A classic novel of race, justice, and innocence in the Deep South. Set in 1930s Alabama, the story follows young Scout Finch as her father, Atticus, bravely defends a black man falsely accused of a crime, exploring themes of empathy, morality, and social inequality.",
//     rating: 5,
//   },
//   {
//     id: 2,
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     genre: "Fiction",
//     costPrice: 400,
//     sellingPrice: 320,
//     image: "https://m.media-amazon.com/images/I/71V1cA2fiZL._UF1000,1000_QL80_.jpg",
//     description:
//       "A cautionary tale of the American dream, set in the Roaring Twenties. Jay Gatsby’s lavish parties and mysterious past unravel a story of love, ambition, wealth, and disillusionment against the backdrop of Jazz Age New York.",
//     rating: 3,
//   },
//   {
//     id: 3,
//     title: "Pride and Prejudice",
//     author: "Jane Austen",
//     genre: "Fiction",
//     costPrice: 349,
//     sellingPrice: 299,
//     image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1681804503i/129915654.jpg",
//     description:
//       "One of literature's most famous courtships, filled with wit and social commentary. Elizabeth Bennet navigates the expectations of class and marriage in Regency England, challenging prejudices and discovering romance in the proud Mr. Darcy.",
//     rating: 2,
//   },
//   {
//     id: 4,
//     title: "1984",
//     author: "George Orwell",
//     genre: "Fiction",
//     costPrice: 449,
//     sellingPrice: 399,
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYWS5Avr24IO21-ZMRXFD4hsb3XW-MCzBmzQ&s",
//     description:
//       "Dystopian novel about surveillance, control, and loss of freedom. Winston Smith’s struggle against a totalitarian regime, led by Big Brother, exposes the terrifying consequences of government overreach and thought control.",
//     rating: 5,
//   },
//   {
//     id: 5,
//     title: "The Catcher in the Rye",
//     author: "J.D. Salinger",
//     genre: "Fiction",
//     costPrice: 399,
//     sellingPrice: 329,
//     image: "https://i.pinimg.com/736x/8a/3f/c9/8a3fc993c9fae8972ea5ea8dcc3bfd10.jpg",
//     description:
//       "Iconic coming-of-age story featuring the legendary Holden Caulfield. Told in a sharp, cynical voice, the novel explores teenage alienation, rebellion, and the longing for genuine connection in postwar New York.",
//     rating: 1,
//   },
//   {
//     id: 6,
//     title: "Sapiens: A Brief History of Humankind",
//     author: "Yuval Noah Harari",
//     genre: "Non-Fiction",
//     costPrice: 599,
//     sellingPrice: 499,
//     image: "https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg",
//     description:
//       "Harari explores the history and impact of humankind through culture, biology, and society. From hunter-gatherers to global empires, the book presents a sweeping narrative of how Homo sapiens shaped—and were shaped by—the world.",
//     rating: 3,
//   },
//   {
//     id: 7,
//     title: "Educated",
//     author: "Tara Westover",
//     genre: "Non-Fiction",
//     costPrice: 550,
//     sellingPrice: 450,
//     image: "https://images-na.ssl-images-amazon.com/images/I/81WojUxbbFL.jpg",
//     description:
//       "A powerful memoir about family, self-invention, and the transformative power of education. Westover recounts her journey from a strict, isolated upbringing in rural Idaho to earning a PhD from Cambridge, overcoming immense challenges.",
//     rating: 2,
//   },
//   {
//     id: 8,
//     title: "The Diary of a Young Girl",
//     author: "Anne Frank",
//     genre: "Non-Fiction",
//     costPrice: 349,
//     sellingPrice: 299,
//     image: "https://cdn.penguin.co.in/wp-content/uploads/2025/03/9780143474609.jpg",
//     description:
//       "Moving true story of Anne Frank's life in hiding during WWII. Her diary, written while concealed from Nazis in Amsterdam, is a poignant testament to resilience, hope, and the enduring spirit of a young girl.",
//     rating: 4,
//   },
//   {
//     id: 9,
//     title: "Quiet: The Power of Introverts",
//     author: "Susan Cain",
//     genre: "Non-Fiction",
//     costPrice: 449,
//     sellingPrice: 379,
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFDztrx260JlyNg1Uxo2V_mLSsUqa7DTznmg&s",
//     description:
//       "Importance of introverts, breaking stereotypes, and how quiet people shape the world. Drawing on psychology and neuroscience, Cain advocates for the strengths and value of introverted minds in a society that celebrates extroversion.",
//     rating: 1,
//   },
//   {
//     id: 10,
//     title: "Crime and Punishment",
//     author: "Fyodor Dostoevsky",
//     genre: "Mystery",
//     costPrice: 449,
//     sellingPrice: 369,
//     image: "https://www.pagepublications.co/cdn/shop/files/9781648338052.MAIN.jpg?v=1734975507",
//     description:
//       "A psychological study of crime, guilt, and redemption in Tsarist Russia. Raskolnikov’s descent into madness after committing murder delves into deep questions of morality, conscience, and the human soul.",
//     rating: 5,
//   },
//   {
//     id: 11,
//     title: "The Hound of the Baskervilles",
//     author: "Arthur Conan Doyle",
//     genre: "Mystery",
//     costPrice: 349,
//     sellingPrice: 299,
//     image: "https://www.yourstagepartners.com/media/catalog/product/cache/769f7dbc5fd66b1ff2e4442e11bb7f92/h/o/hound_of_baskerville_cover.jpg",
//     description:
//       "Sherlock Holmes investigates a supernatural hound menacing the Baskerville estate. Set on the misty moors, Holmes and Watson confront folklore, family secrets, and a terrifying curse.",
//     rating: 4,
//   },
//   {
//     id: 12,
//     title: "The Silent Patient",
//     author: "Alex Michaelides",
//     genre: "Mystery",
//     costPrice: 420,
//     sellingPrice: 350,
//     image: "https://m.media-amazon.com/images/I/61R+Cpm+HxL._UF1000,1000_QL80_.jpg",
//     description:
//       "A gripping psychological thriller featuring a silent accused and a determined therapist. The unraveling of Alicia Berenson’s secret leads through shocking twists and reveals about obsession and trauma.",
//     rating: 3,
//   },
//   {
//     id: 13,
//     title: "Mexican Gothic",
//     author: "Silvia Moreno-Garcia",
//     genre: "Mystery",
//     costPrice: 459,
//     sellingPrice: 389,
//     image: "https://cdn11.bigcommerce.com/s-65f8qukrjx/images/stencil/800w/products/6534/17146/Moreno-Garcia_Mexican_Gothic_cover__31138.1687451119.jpg?c=1",
//     description:
//       "Atmospheric gothic mystery about unsettling secrets in a haunted mansion. When Noemi travels to a remote Mexican estate, she uncovers disturbing truths and confronts supernatural horrors.",
//     rating: 5,
//   },
//   {
//     id: 14,
//     title: "Factfulness",
//     author: "Hans Rosling",
//     genre: "Non-Fiction",
//     costPrice: 479,
//     sellingPrice: 399,
//     image: "https://images.squarespace-cdn.com/content/v1/5ae815c95b409b2edc74c363/1535440089902-0OX99D6NFI389SW7929R/Factfulness.jpg",
//     description:
//       "Ten reasons why the world is better than you think, packed with global facts. Rosling challenges misconceptions about poverty, health, and the future, using data and optimism to reveal an unexpectedly hopeful world.",
//     rating: 2,
//   },
//   {
//     id: 15,
//     title: "Brave New World",
//     author: "Aldous Huxley",
//     genre: "Fiction",
//     costPrice: 399,
//     sellingPrice: 340,
//     image: "https://upload.wikimedia.org/wikipedia/en/6/62/BraveNewWorld_FirstEdition.jpg",
//     description:
//       "Visionary novel about a dystopian future driven by technological control. Huxley’s chilling world explores themes of free will, happiness, and the price of utopia in a society obsessed with genetic engineering and pleasure.",
//     rating: 4,
//   },
//   {
//     id: 16,
//     title: "The Da Vinci Code",
//     author: "Dan Brown",
//     genre: "Mystery",
//     costPrice: 499,
//     sellingPrice: 399,
//     image: "https://upload.wikimedia.org/wikipedia/en/6/6b/DaVinciCode.jpg",
//     description:
//       "Bestselling thriller combining art, symbols, and conspiracy across Europe. Symbologist Robert Langdon follows a deadly trail through mysteries of Christianity, codes, and secret societies in this fast-paced adventure.",
//     rating: 2,
//   },
//   {
//     id: 17,
//     title: "The Power of Habit",
//     author: "Charles Duhigg",
//     genre: "Non-Fiction",
//     costPrice: 449,
//     sellingPrice: 375,
//     image: "https://stephenangbulu.wordpress.com/wp-content/uploads/2019/12/the-power-of-habit.jpeg",
//     description:
//       "How habits work and how we can change them to transform our lives. Duhigg blends neuroscience, psychology, and case studies to show how routine choices shape success and happiness.",
//     rating: 4,
//   },
//   {
//     id: 18,
//     title: "Sherlock Holmes: A Study in Scarlet",
//     author: "Arthur Conan Doyle",
//     genre: "Mystery",
//     costPrice: 349,
//     sellingPrice: 299,
//     image: "https://i0.wp.com/apeejay.news/wp-content/uploads/2024/02/080224-Scarlet-Blog.jpg?resize=740%2C524&ssl=1",
//     description:
//       "The first Sherlock Holmes detective mystery introducing Holmes and Watson. A cryptic murder and a seemingly unsolvable case set the stage for iconic forensic sleuthing.",
//     rating: 1,
//   },
//   {
//     id: 19,
//     title: "The Woman in White",
//     author: "Wilkie Collins",
//     genre: "Mystery",
//     costPrice: 429,
//     sellingPrice: 360,
//     image: "https://shop.penguin.co.uk/cdn/shop/files/TheWomaninWhite_580x580_cropped.jpg?v=1701345757",
//     description:
//       "Classic Victorian mystery novel with secrets, suspense, and family drama. Collins’s literary masterpiece weaves psychological intrigue, mistaken identity, and justice.",
//     rating: 3,
//   },
//   {
//     id: 20,
//     title: "Blink: The Power of Thinking Without Thinking",
//     author: "Malcolm Gladwell",
//     genre: "Non-Fiction",
//     costPrice: 479,
//     sellingPrice: 399,
//     image: "https://d3525k1ryd2155.cloudfront.net/h/834/420/864420834.0.x.jpg",
//     description:
//       "Gladwell investigates the power and pitfalls of rapid decision-making. Filled with fascinating stories and studies, the book explores how our intuition shapes choices in everyday life.",
//     rating: 2,
//   },
// ];

export default booksData;
