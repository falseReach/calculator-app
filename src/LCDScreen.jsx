import { charDictionary } from './CHARACTERS';

// Component to render a single pixel
function RenderPixel({pixel}){
    const isColored = pixel ? "blue" : "black" // Determines pixel color based on value (1 or 0)
    return <div className="colorbox" style={{backgroundColor: isColored}} /> 

}

// Component to render a character as an 8x8 grid of pixels
export default function RenderCharacter ({char}){
    let pixelGrid = charDictionary[char] // Retrieve 8x8 pixel data for the character
    let RenderedGrid = pixelGrid.map((row, rowIndex) => {
        return(
            <div key={rowIndex} style={{ display: "flex" }}>
                {row.map((pixel, pixelIndex) =>   
                <RenderPixel pixel={pixel} key={pixelIndex} />) }
            </div>
        )    
    })

    return (
        <div style={{display:"inline-block"}}>
            {RenderedGrid}
        </div>
    )

}