const Book = require('../model/Book');

const getAllBooks  = async(req,res,next)=>{
    let books;
    try {
        books = await Book.find();
    } catch (error) {
        console.log(error);
    }

    if(!books){
        return res.status(404).json({message:"no products found"});
    }else{
        return res.status(200).json({books});

    }
}
 
const getById = async(req,res,next)=>{
    
    const id = req.params.id;
    let book;
    try {
        book  = await Book.findById(id);
    } catch (error) {
        console.log(error);
    }
     if(!book){
       return res.status(404).json({message:"no file found"});
     }else{
        return res.status(200).json({ book });
     }
}

const updateBook = async(req,res,next)=>{
    
    const id = req.params.id;
    const {name,aurthor,price,description,available,image} =  req.body;
    let book;
    try {
        book = await Book.findByIdAndUpdate(id,{
            name,
            aurthor,
            price,
            description,
            available,
            image
        });
        book  = await book.save();
    } catch (error) {
        console.log(error);
    }
    if(!book){
        return res.status(500).json({message:"Unable to update the book "});
     }else{
         return res.status(200).json({book})
     }
}

const deleteBook = async(req,res,next)=>{
    let id = req.params.id;
    let book;
    try {
        book = await Book.findByIdAndRemove(id);
    } catch (error) {
        console.log(error);
    }
    if(!book){
        res.status(404).json({message:"unable to delete the book"});
    }else{
        res.status(500).json({message:"successfully deleted"});
    }
}

const AddBook = async(req,res,next)=>{
    const {name,aurthor,price,description,available,image} =  req.body
    let book;
    try {
        book = new Book({
          name,
          aurthor,
          price, 
          description,
          available,
          image,
        });
        await book.save();
    } catch (error) {
        console.log(error)
    }
    if(!book){
       return res.status(500).json({message:"Unable to add the book "});
    }else{
        return res.status(200).json({book})
    }
}

exports.getAllBooks = getAllBooks;
exports.AddBook = AddBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;