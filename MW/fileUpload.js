import multer from 'multer'


export const addIMage = (fileName) => {

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/product')
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            cb(null,  uniqueSuffix + '-' + file.originalname )
        }
    })

    function fileFilter(req, file, cb) {
        if (file.mimetype.startsWith('image')) {
            cb(null, true)
        } else {
            cb('in valid file type', false)
            
        }
    }

    const upload = multer({ storage, fileFilter })
    return upload.single(fileName)
}