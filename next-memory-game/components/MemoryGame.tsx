'use client'

const generateDeck = () => {
    const memoryCards = ['Buzz.jpg', 'Mudkip.jpg', 'Oshawott.jpg', 'Pop.jpg', 'Psyduck.jpg', 'Sobble.png', 'Squirtle.jpg', 'Vapor.jpg']

    const deck = [...memoryCards, ...memoryCards]
    deck.sort(() => Math.random() - 0.5)
}

export default function MemoryGame() {
    const [cards, setCards] = useState<string[]>(generateDeck());
    return(
        <div>

        </div>
        
    )
}