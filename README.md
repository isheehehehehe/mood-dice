# Cutu Mood Dice

**A little universe of comfort, created to make difficult days feel a little lighter.**

Cutu Mood Dice is an interactive, space-themed mood companion web application that provides personalized messages, playful activities, and music recommendations based on how a user feels.

Built with vanilla HTML, CSS, and JavaScript, the application combines interactive dice mechanics, animated constellations, mood-specific visual themes, and personalized experiences in a responsive interface.

🔗 **Live Demo:** [https://isheehehehehe.github.io/mood-dice/]

---

## Features

### Mood-Based Experiences
Choose from seven different moods:
- 😔 Sad
- 😊 Happy
- 💗 Romantic
- 🌙 Lonely
- 🤪 Weird
- 😴 Lazy
- 😐 Bored

Each mood comes with its own collection of personalized messages and activities.

### Interactive Dice Roller
- Animated dice-rolling experience.
- Randomized message selection.
- Messages appear after the rolling animation finishes.
- Option to roll again or return to the mood selection screen.

### Comfort Mode
A special comfort experience activates when Sad or Lonely is selected twice consecutively.

Instead of another regular dice roll, users receive gentle reassurance and supportive messages.

### Space-Themed Interface
- Animated starfield background.
- Connecting constellation effects.
- Pixel-style typography inspired by retro video games.
- Mood-specific visual themes and colour palettes.
- Smooth transitions and interactive elements.

### Mood-Based Music
Spotify playlist links are provided for individual moods, allowing users to discover music that matches their emotional state.

### Personalised Messages
Users can write and save their own custom messages using browser local storage, allowing their notes to persist between visits on the same browser.

### Audio Experience
- Background ambient music.
- Interactive sound effects.
- Audio playback initiated through user interaction to respect browser autoplay restrictions.

### Responsive Design
Designed to work across:
- Desktop computers
- Tablets
- Mobile phones

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Application structure |
| CSS3 | Styling, animations and responsive layouts |
| JavaScript | Application logic and interactions |
| Canvas API | Animated stars and constellation effects |
| Web Audio / HTML Audio | Background music and sound effects |
| Local Storage API | Saving custom messages |
| Spotify | Mood-based music recommendations |
| GitHub Pages / Netlify | Web hosting |

---

## Project Structure

```text
cutu-mood-dice/
│
├── index.html       # Main application structure
├── style.css        # Styling, themes and animations
├── script.js        # Mood logic, dice and interactions
├── README.md        # Project documentation
│
├── manifest.json    # PWA configuration (optional)
├── sw.js            # Service worker for offline support (optional)
│
└── assets/          # Images, icons and audio files (if used)
```

---

## Getting Started

No installation or additional frameworks are required.

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the project folder

```bash
cd mood-dice
```

### 3. Run the application

Open `index.html` in your browser.

For the best experience, use a local development server or deploy the project using a static hosting platform.

---

## Key Implementation Concepts

This project explores several fundamental frontend development concepts:

- **DOM Manipulation:** Dynamically updating screens, messages and interface elements.
- **Event Handling:** Managing mood selection, button clicks and audio interactions.
- **Randomization:** Generating random dice outcomes and personalized messages.
- **CSS Animations:** Creating animated dice rolls and interactive visual effects.
- **Canvas Rendering:** Drawing stars and connecting constellation patterns.
- **Browser Storage:** Persisting user-created messages using local storage.
- **Responsive Web Design:** Adapting layouts to different screen sizes.
- **Progressive Web App Concepts:** Using a web manifest and service worker for installability and offline functionality when configured.

---

## Future Improvements

- [ ] Complete offline functionality through service worker caching.
- [ ] Add installable PWA support.
- [ ] Introduce more moods and personalized message collections.
- [ ] Add mood-specific ambient soundtracks.
- [ ] Implement a collection of saved messages instead of a single saved note.
- [ ] Add more interactive space animations.
- [ ] Introduce additional accessibility and customization options.

---

## The Idea Behind the Project

Sometimes, people don't need complicated solutions. They just need a small reminder that someone cares.

Cutu Mood Dice was created around that idea: a little interactive space where users can acknowledge how they feel, discover a comforting message, listen to music, or simply take a small break.

**Because even on the hardest days, you deserve a little sparkle.** 

---

## Author

**Isheeta Dhabria**

B.Tech Computer Science & Engineering | Cloud Computing

- GitHub: [@isheehehehehe](https://github.com/isheehehehehe)
- LinkedIn: [@isheetadhabria06]](https://www.linkedin.com/in/isheetadhabria06)

---

*Made with curiosity, code, and a little extra love. 🌙*
