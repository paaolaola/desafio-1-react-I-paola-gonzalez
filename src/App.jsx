import "./App.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";

const data = {
    characters: [
        {
            name: "Bartolo",
            description: "Lleno de energía y listo para jugar. Dale a Bartolo el hogar amoroso que se merece!",
            image: "https://images.pexels.com/photos/3196887/pexels-photo-3196887.jpeg",
            type: "Husky",
            button: "Husky",
            colorButton: "success",
        },

        {
            name: "Pelusa",
            description: "Es juguetona, amigable y se lleva bien con los niños y otros animales. Haz a Pelusa parte de tu familia hoy mismo! ",
            image: "https://images.pexels.com/photos/15794775/pexels-photo-15794775/free-photo-of-hermoso-border-collie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            type: "Bobtail",
            button: "Bobtail",
            colorButton: "primary",
        },

        {
            name: "Lomito",
            description: "Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Lomito y experimenta un amor incondicional!",
            image: "https://images.pexels.com/photos/5205386/pexels-photo-5205386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            type: "Shar Pei",
            button: "Shar Pei",
            colorButton: "danger",
        },

        {
            name: "Niña",
            description: "Es una compañera leal y cariñosa que adora los mimos y los abrazos. Ayuda a Niña a encontrar su final feliz!",
            image: "https://images.pexels.com/photos/11756622/pexels-photo-11756622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            type: "Beagle",
            button: "Beagle",
            colorButton: "warning",
        },
    ],
};
function App() {
    return (
        <div>
            <Header title="ADOPTA UN PERRITO"></Header>
            <main>
                <Gallery characters={data.characters}>
                    <MyCard></MyCard>
                </Gallery>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default App;
