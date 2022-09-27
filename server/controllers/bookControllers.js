import Book from "../model/Book.js";

export const getAllBooks = async (req, res, next) => {
    let books;
    try {
        books = await Book.find()
    }
    catch (e) {
        console.log(e);
    }

    if (!books) {
        return res.status(404).json({ message: "No Books found!" })
    }
    return res.status(200).json({ books })
}

export const addBook = async (req, res, next) => {
    const { name, author, description, price, available, image } = req.body
    let book;
    try {
        book = new Book({
            name, author, description, price, available, image
        })
        await book.save()
    } catch (e) {
        console.log(e);
    }

    if (!book) {
        return res.status(500).json({ message: "Unable to add" })
    }

    return res.status(201).json({ book })
}

export const getById = async (req, res, next) => {
    const id = req.params.id
    let book;

    try {
        book = await Book.findById(id)
    } catch (e) {
        console.log(e);
    }

    if (!book) {
        return res.status(404).json({ message: "No Book found!" })
    }
    return res.status(200).json({ book })
}

export const updateBook = async (req, res, next) => {
    const id = req.params.id
    const { name, author, description, price, available, image } = req.body
    let book;
    try {
        book = await Book.findByIdAndUpdate(id, { name, author, description, price, available, image })
        book = await book.save()
    } catch (e) {
        console.log(e);
    }

    if (!book) {
        return res.status(404).json({ message: "Unable to update by this ID!" })
    }
    return res.status(200).json({ book })

}

export const deleteBook = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findByIdAndRemove(id)
    } catch (e) {
        console.log(e);
    }

    if (!book) {
        return res.status(404).json({ message: "Unable to delete by this ID!" })
    }
    return res.status(200).json({ message : "Product successfully deleted!" })
}