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
    name: 'Otumfuo Osei Tutu II',
    position: 'King of the Ashanti Kingdom',
    bio: 'He ensured peace at the time of long standing cheftecy war at bawku the northen part of ghana',
  },

  {
    speakerImg: 'src/assets/images/Dr-Ibrahim-Mohammed-Awal.jpeg',
    name: 'Otumfuo Osei Tutu II',
    position: 'King of the Ashanti Kingdom',
    bio: 'He ensured peace at the time of long standing cheftecy war at bawku the northen part of ghana',
  },

  {
    speakerImg: 'src/assets/images/okraku.jpg',
    name: 'Otumfuo Osei Tutu II',
    position: 'King of the Ashanti Kingdom',
    bio: 'He ensured peace at the time of long standing cheftecy war at bawku the northen part of ghana',
  },

  {
    speakerImg: 'src/assets/images/sarkodie.jpg',
    name: 'Otumfuo Osei Tutu II',
    position: 'King of the Ashanti Kingdom',
    bio: 'He ensured peace at the time of long standing cheftecy war at bawku the northen part of ghana',
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
        <em>${position}</em>
        <hr>
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
