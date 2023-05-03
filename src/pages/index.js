import IndexLayout from "@/Layouts/IndexLayout"
import SimpleSlider from "@/components/IndexHeroSlider"
import styles from '@/styles/Home.module.scss'
export default function Home() {
  return (
    <>
    <IndexLayout>
      <main>
        <section className={styles.heroblock}>
          <SimpleSlider/>
        </section>
      </main>
    </IndexLayout>
    </>
  )
}
