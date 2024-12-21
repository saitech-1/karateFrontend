import { createSignal, onMount } from 'solid-js';
import styles from './App.module.css';
import saiZay from './assets/saiZay.jpg';
import thurein from './assets/thurein.jpg';
import logo from './assets/logo.png';
import karateBg1 from './assets/bg1.jpg';
import karateBg2 from './assets/bg.jpg';
import karateBg3 from './assets/bg2.jpg'
import belts from './assets/belts.jpg';
import dojorule from './assets/dojoRules.jpg';
import orgChart from './assets/organisational_chart.jpg';
import orgChart1 from './assets/organisational_chart1.jpg';
import kata from './assets/kata.jpg';
import kumite from './assets/kumite.jpg';
import kataprice from './assets/prize.jpg';
import kumiteprice from './assets/prize1.jpg';
import kumiteprice1 from './assets/prize2.jpg';

const App = () => {
  const [currentBg, setCurrentBg] = createSignal(0);
  const [currentPic, setCurrentPic] = createSignal(0);
  const [isMenuOpen, setIsMenuOpen] = createSignal(false);
  const [currentKataBg, setNewCurrentKataBg] = createSignal(0);
  const [currentKumiteBg, setNewKumiteBg] = createSignal(0);
  const backgrounds = [karateBg1, karateBg2, karateBg3];
  const pics = [belts, dojorule, orgChart, orgChart1];
  const kataPrice = [kata, kataprice]
  const kumitePrice = [kumite, kumiteprice, kumiteprice1]

  let interval;
  onMount(() => {
    interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
      setCurrentPic((prev) => (prev + 1) % pics.length);
      setNewCurrentKataBg((prev)=> (prev + 1) % kataPrice.length)
      setNewKumiteBg((prev)=> (prev + 1) % kumitePrice.length)
    }, 3000);

    return () => clearInterval(interval);
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen());

  return (
    <div class={styles.App}>
      <header>
        <nav class={styles.navbar}>
          <div class={styles.logoContainer}>
            <img src={logo} alt="Kougeki Logo" class={styles.logo} />
            <span class={styles.brandName}><a href="#">Kougeki</a></span>
          </div>
          <button class={styles.menuToggle} onClick={toggleMenu}>
            ☰
          </button>
          <ul class={`${styles.navMenu} ${isMenuOpen() ? styles.showMenu : ''}`}>
            <li><a href="#about" onClick={toggleMenu}>About Us</a></li>
            <li><a href="#coaches" onClick={toggleMenu}>Coaches</a></li>
            <li><a href="#testimonials" onClick={toggleMenu}>Testimonials</a></li>
            <li><a href="#achievements" onClick={toggleMenu}>Achievements</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero" class={styles.hero} style={{ "background-image": `url(${backgrounds[currentBg()]})` }}>
          <div class={styles.heroContent}>
            <h1>We Provide Class and Personal Training</h1>
            <h1>For Adults and Kids</h1>
          </div>
        </section>

        <section id="about" class={styles.about}>
          <div class={styles.aboutContent}>
            <h2>About Us</h2>
            <p>Founded in 2021, Kougeki has been dedicated to providing high-quality Kyokushin Karate training for both children and adults. As a proud branch of IKO Myanmar, led by Shihan Min Lwin, we follow the Kyokushin Ryu tradition under the leadership of Kancho Shokei Matsui, the head of IKO Ichigeki.</p>
            <p>Kyokushin Karate is renowned for its discipline, strength, and rigorous training, emphasizing not only physical prowess but also mental and spiritual development. Unlike many other martial arts, Kyokushin focuses on full-contact sparring, teaching practitioners the values of perseverance, respect, and self-control.</p>
            <p>At Kougeki, we are committed to providing an environment that nurtures growth and achievement. Whether you're a beginner or an experienced martial artist, our instructors are dedicated to helping you achieve your personal best.</p>
          </div>
          <div class={styles.aboutImage}>
            <img src={pics[currentPic()]} alt="Path" />
          </div>
        </section>

        <section id="coaches" class={styles.coaches}>
          <h2>Meet Our Coaches</h2>
          <div class={styles.coachCards}>
            <div class={styles.coachCard}>
              <div class={styles.coachImageContainer}>
                <img src={thurein} alt="Thu Rein" />
              </div>
              <div class={styles.coachInfo}>
                <h3>Thu Rein @ Thet Tun Aung</h3>
                <p class={styles.coachTitle}>2nd Dan (Dojo operator of Kougeki)</p>
                <p>9 years of consistent training, black belt in Shotokan Karate at 16 years old, 5 years of coaching experience, and recognized as an international judge at IKO.</p>
                <a href="https://www.facebook.com/thu.rein.9674" target="_blank" rel="noopener noreferrer" class={styles.coachButton}>View Profile</a>
              </div>
            </div>
            <div class={styles.coachCard}>
              <div class={styles.coachImageContainer}>
                <img src={saiZay} alt="Sai Zay" />
              </div>
              <div class={styles.coachInfo}>
                <h3>Sai Zay</h3>
                <p class={styles.coachTitle}>Instructor 2nd Dan</p>
                <p>8 years of consistent training, Best fighter Awarded - 2023 IKO Myanmar Youths and championship, Best technical awarded for 2023 year, youngest 2nd dan of IKO Myanmar, 4 years of coaching experience.</p>
                <a href="https://www.facebook.com/sayarsai3377/" target="_blank" rel="noopener noreferrer" class={styles.coachButton}>View Profile</a>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" class={styles.testimonials}>
          <h2>What Our Students Say</h2>
          <div class={styles.testimonialCards}>
            <div class={styles.testimonialCard}>
              <p>"Training here has transformed my life. The discipline and strength I've gained go beyond just physical abilities."</p>
              <footer>- Win Theingi San, Brown Belt Student</footer>
            </div>
            <div class={styles.testimonialCard}>
              <p>"The coaches are inspiring and supportive. They push you to your limits while ensuring a safe training environment."</p>
              <footer>- Kyi Cyn Shoon, Brown Belt Student </footer>
            </div>
            <div class={styles.testimonialCard}>
              <p>"Kougeki has become my second home. The community here is amazing, and the training is world-class."</p>
              <footer>- Kaung Khant Htet, Green Belt Student</footer>
            </div>
          </div>
        </section>

        <section id="achievements" class={styles.achievements}>
          <h2>Our Achievements</h2>
          <div class={styles.achievementCards}>
            <div class={styles.achievementCard}>
              <div class={styles.achievementImageContainer}>
                <img src={kataPrice[currentKataBg()]} alt="Kata Competition" />
              </div>
              <div class={styles.achievementInfo}>
                <h3>Kata Prizes</h3>
                <ul>
                  <li>1st Place, 3rd Place, 6th Place - Advance Group Kata Championship 2023</li>
                  <li>3rd Place, 4th Place - Begineer Group Kata Championship 2023</li>
                </ul>
              </div>
            </div>
            <div class={styles.achievementCard}>
              <div class={styles.achievementImageContainer}>
                <img src={kumitePrice[currentKumiteBg()]} alt="Kumite Competition" />
              </div>
              <div class={styles.achievementInfo}>
                <h3>Kumite Competition Prizes</h3>
                <ul>
                  <li>Gold & Silver Medals - IKO Myanmar Youths Championship 2023</li>
                  <li>Gold & Silver Medals - IKO Yangon Youths Championship 2024</li>
                  <li>Gold & Silver Medals - IKO Yangon Youths and Adults Championship 2024</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer class={styles.footer}>
        <div class={styles.footerContent}>
          <div class={styles.footerSection}>
            <h3>Kougeki Karate</h3>
            <p>Empowering lives through <br/>the art of Kyokushin Karate since 2021.</p>
          </div>
          <div class={styles.footerSection}>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#coaches">Our Coaches</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#achievements">Achievements</a></li>
              <li><a href="https://www.instagram.com/1_kougeki/"> 
              <svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="1em" width="1em" style="overflow: visible; color: currentcolor;"><path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"></path></svg>
              </a>
              <a href="https://www.facebook.com/Ichigeki1"> 
              <svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="1em" width="1em" style="overflow: visible; color: currentcolor;"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg> 
              </a>
              </li>
            </ul>
          </div>
          <div class={styles.footerSection}>
            <h3>Contact Info</h3>
            <p>2nd Floor, excel treasure hotel, Yangon</p>
            <p>Class Period: Friday, Saturday, Sunday (4pm - 6pm)</p>
            <p>Phone: +95 9 756 039 968</p>
            <p>Phone: +95 9 763 468 829</p>
          </div>
        </div>
        <div class={styles.footerBottom}>
          <p>&copy; 2024 Kougeki Karate. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

