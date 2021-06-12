const colors = [
    '#B2EEE4',
    '#B2DAEE',
    '#B2BCEE',
    '#C6B2EE',
    '#E4B2EE',
    '#EEB2DA',
    '#25CED1',
    '#FFFFFF',
    '#FCDCC7',
    '#FF8A5B',
    '#EA526F',
]

//const requiredFeatures = ['Category*', 'Background*', 'Outline*', 'Color*'];
//const optionalFeatures = ['Eyes', 'Mouth', 'Ears', 'Hats', 'Glasses', 'Jewelry', 'Tags', 'Accesories'];
const labels = ['Category*', 'Color*','Eyes', 'Mouth', 'Ears', 'Hats', 'Glasses', 'Jewelry', 'Tags', 'Accesories']

const category = ['CANINE', 'ZOMBIE', 'ALIEN', 'HOLO'];
const color = ['RED', 'RUST', 'GRAY', 'BROWN', 'WHITE', 'GOLD', 'PINK', 'BLUE', 'ZOMBIE', 'ALIEN', 'HOLO'];
const eyes = ['NONE', 'EYE SPOT', 'SCAR'];
const mouth = ['NONE', 'DROOL', 'BLOOD', 'FANG'];
const ears = ['NONE', 'EARRING'];
const hats = ['NONE', 'FITTED-BLACK', 'FITTED-RED', 'FITTED-NAVY', 'SKULLY-BLACK', 'SKULLY-ORANGE', 'SPINNER', 'POLICE CAP'];
const glasses = ['NONE', 'SHADES-PINK', 'SHADES-LIME', 'SHADES-GOLD', 'SHADES-HOLO', 'MATSUDA-BLACK', 'MATSUDAS-GOLD', '3D', 'EYE MASK', 'EYE PATCH'];
const jewerlry = ['NONE', 'CHAIN', 'COLLAR-GRAY', 'COLLAR-PINK', 'COLLAR-LIME', 'COLLAR-BLUE', 'COLLAR-ORANGE'];
const tags = ['NONE', 'TAG-GOLD', 'TAG-PINK', 'TAG-BLUE'];
const accesories = ['NONE', 'BONE', 'SWEATER-PINK', 'SWEATER-BLUE'];

const columnWidth = 150
const rowHeight = 100
const fontSize = 36

function generateRandomInteger(max) {
    return Math.floor(Math.random() * max);
}

function steps(value) {
    switch (value) {
        case 0:
            return category[generateRandomInteger(category.length)]
        case 1:
            return color[generateRandomInteger(color.length)]
        case 2:
            return eyes[generateRandomInteger(eyes.length)]
        case 3:
            return mouth[generateRandomInteger(mouth.length)]
        case 4:
            return ears[generateRandomInteger(ears.length)]
        case 5:
            return hats[generateRandomInteger(hats.length)]
        case 6:
            return glasses[generateRandomInteger(glasses.length)]
        case 7:
            return jewerlry[generateRandomInteger(jewerlry.length)]
        case 8:
            return tags[generateRandomInteger(tags.length)]
        case 9:
            return accesories[generateRandomInteger(accesories.length)]
    }

}

function drawTemplate() {
    const widgets = []

    for (let rowIdx = 0; rowIdx < labels.length; rowIdx++) {
        const rowY = rowIdx * rowHeight + 10 * rowIdx
        const rowLabel = labels[rowIdx]
        const rowColor = getRowColor(rowIdx)
        if (rowLabel) {
            // widgets.push(getRowLabel(rowLabel, rowY, rowColor))
        }
        for (let colIdx = 0; colIdx < labels.length; colIdx++) {
            const colX = colIdx * columnWidth + 2 * colIdx + 25
            if (rowIdx === 0) {
                widgets.push(getColumnLabel(colX, labels[colIdx]))
            }
            widgets.push(getShape(colX, rowY, rowColor, steps(colIdx)))
        }
    }
    miro.board.widgets.create(widgets)
}

function getShape(x, y, color, feature) {
    return {
        type: 'shape',
        text: feature,
        x: x,
        y: y,
        width: columnWidth,
        height: rowHeight,
        style: {
            borderWidth: 0,
            backgroundColor: color,
            borderRadius: 25.0,
        },
    }
}

function getColumnLabel(x, label) {
    return {
        type: 'text',
        x: x,
        y: -(rowHeight / 2 + fontSize),
        text: label,
        width: columnWidth,
        height: fontSize,
        style: {
            fontSize: fontSize,
            textColor: '#555',
            textAlign: 'c',
        },
    }
}

function getRowColor(index) {
    return colors[index % colors.length]
}
