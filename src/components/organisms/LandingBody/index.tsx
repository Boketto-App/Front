import Image from 'next/image'
import styles from './LandingBody.module.css'
import { RxDot, RxDotFilled } from 'react-icons/rx'


const LandingBody = () => {
  return (
    <div className={styles.body}>
      <h3 className={styles.bodySubtitle}>
        Automatiza al <span className='highlight'>instante </span>
        Crece tu emprendimiento
        No hagas el trabajo duro
      </h3>
      <p className={styles.appDescription}>
        Integra Redes Sociales, e-commerce y cualquier otra App en tu organizacion y olvidate
      </p>

      <div className='sliderContainer'>
        <div className={styles.slider}>
          <Image
            src="/landing/screenBoketto.png"
            alt="Boketto Logo"
            width={133}
            height={218}
            className={styles.sliderImage}
            priority
          />
          <div style={{ marginRight: "24px" }}>Conectá las apps</div>
        </div>

        <div className="positionDots">
          <RxDotFilled style={{ cursor: 'pointer' }} size={24} />
          <RxDot style={{ cursor: 'pointer' }} size={24} />
          <RxDot style={{ cursor: 'pointer' }} size={24} />
        </div>
      </div>

    </div>
  )
}

export default LandingBody