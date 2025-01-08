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
        // the 'src' property and the 'alt' property, and the data has exactly that, we can just write: 'img={entry.img}',
        // as we have done below
        img={entry.img}
        title={entry.title}
        country={entry.country}
        googleMapsLink={entry.googleMapsLink}
        dates={entry.dates}
        text={entry.text}
      />
      // You can also just do this:
      // <Entry
      //     key={entry.id}
      //     entry={entry}
      // />
      // And it would require to go to the Entry component and access the props with: props.entry.whatever.
      // This is an even more concise way, but the key names of the key-value pairs in the data file should match the names of the keys
      // in the Entry component. So if in the data the key for image is img, in the Entry component you should access it
      // as props.entry.src.img, you cannot say props.entry.src.image. This is the only reason why we can use this concise way

      // We can also use:
      // <Entry
      //     key={entry.id}
      //     {...entry}
      // />
      // It will spread all the properties, and we won't have to use props.entry.whatever in the Header comopnent,
      // we would simply have to use props.whatever.
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