import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"


export default function App() {
  const entryElements = data.map(entry => {
    return (
      <Entry 
        // A more straighforward way to write this would be 
        // {{
        //   src: entry.img.src
        //   alt: entry.img.alt
        // }}
        // But since the Entry component is expecting the 'img' prop to be an object, and is expecting that object to have
        // the 'src' property and the 'alt' property
        img={entry.img}
        title={entry.title}
        country={entry.country}
        googleMapsLink={entry.googleMapsLink}
        dates={entry.dates}
        text={entry.text}
      />
    )
  })
    return (
        <>
            <Header />
            <main className="container">
                {entryElements}
            </main>
        </>
    )
}