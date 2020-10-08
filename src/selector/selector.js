export default (notes, { title }) => {
    return notes.filter((note) => {
        const titleMatch = note.title.toLowerCase().includes(title.toLowerCase());
        return titleMatch;
    })
}