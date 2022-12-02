const humburger = document.querySelector('.humburger');
const mobileMenu = document.querySelector('.nav-links');

humburger.addEventListener('click', () => {
  humburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  document.body.style.overflow = 'hidden';
});

document.querySelectorAll('.nav-links').forEach((n) => n
  .addEventListener('click', () => {
    humburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
  }));

const speakerSection = document.querySelector('.speakers-cont');

const myArray = [
  {
    speakerImg: 'src/assets/images/Otumfuo-Osei-Tutu-II.jpg',
    name: 'Otumfuo Osei Tutu II',
    position: 'King of the Ashanti Kingdom',
    bio: 'He ensured peace at the time of long standing cheftecy war at bawku the northen part of ghana',
  },

  {
    speakerImg: 'src/assets/images/Togbe.jpg',
    name: 'Togbe Afede XIV',
    position: 'Agbogbomefia of the Asogoli state',
    bio: 'Executive Chairman of World Trade center, Ghana',
  },

  {
    speakerImg: 'src/assets/images/Dr-Ibrahim-Mohammed-Awal.jpeg',
    name: 'Dr Ibrahim Mohammed Awal',
    position: 'Minister of Tourism, Ghana',
    bio: 'He is formal minister of business development',
  },

  {
    speakerImg: 'src/assets/images/okraku.jpg',
    name: 'Mr Okraku Mante',
    position: 'Deputy Minister of Tourism',
    bio: 'Ghanian music producer and Politician',
  },

  {
    speakerImg: 'src/assets/images/sarkodie.jpg',
    name: 'Micheal Owusu Addo(SARKODIE)',
    position: 'Ghanian Rapper',
    bio: 'He is 2014 best International Art BET & 2021 Best International flow',
  },

  {
    speakerImg: 'src/assets/images/Sadiq-Abdulai-Abu.jpg',
    name: 'Sardiq Abdulai Abu',
    position: 'CEO of 3Music Awards',
    bio: 'He is an event promoter and a phylantropist',
  },
];

const displaySpeakers = ({
  speakerImg, name, position, bio,
}) => {
  const div = document.createElement('div');
  div.className = 'speakers';
  div.innerHTML = `
    <img src="${speakerImg}" alt="${name}">
    <div class="speaker-info">
        <h4 class="speaker-name">${name}</h4>
        <em class= "position">${position}</em>

        <p class="speaker-b">${bio}</p>
    </div>
    `;
  return (div);
};

const getSpeakers = () => {
  myArray.forEach((myObjects, index) => {
    speakerSection.append(displaySpeakers(myObjects, index));
  });
};

getSpeakers();
