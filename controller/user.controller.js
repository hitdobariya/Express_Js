const User = require('../model/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.userLogin = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, isDelete: false });
        if (!user) return res.status(404).json({ message: 'user not found...' });
        let matchpassword = await bcrypt.compare(req.body.password, user.password);
        if (!matchpassword) return res.status(400).json({ message: 'email or password incorrect...' });
        let token = await jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        // console.log(token);      
        res.status(200).json({ message: 'login successs...', token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};

exports.userRegistration = async (req, res) => {
    try {
        let imagepath = "";
        let user = await User.findOne({ email: req.body.email, isDelete: false });
        if (user) return res.status(400).json({ message: 'user already exists...' });
        if (req.file) { imagepath = req.file.path.replace(/\\/g, '/') };
        let hashpasssword = await bcrypt.hash(req.body.password, 10);
        user = await User.create({ ...req.body, password: hashpasssword, profileImage: imagepath });
        res.status(201).json({ message: 'user registration successfully...' });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};

exports.userProfile = async (req, res) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};

exports.getUser = async (req, res) => {
    try {
        let user = await User.find({ isDelete: false });
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};

exports.updateUser = async (req, res) => {
    try {
        let user = req.user;
        let imagepath = '';
        if (req.file) { imagepath = req.file.path.replace(/\\/g, '/') };
        user = await User.findByIdAndUpdate(user._id, { $set: req.body }, { new: true });
        res.status(200).json({ user, message: 'user update successfully...' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};

exports.changePassword = async (req, res) => {
    try {
        const { currentpassword, newpassword, confirmpassword } = req.body;
        let user = req.user;
        if (!currentpassword || !newpassword || !confirmpassword) return res.json({ message: 'provide all passwords...' });
        if (newpassword !== confirmpassword) return res.json({ message: 'confirmpassword not matched...' });
        let matchpassword = await bcrypt.compare(currentpassword, user.password);
        if (!matchpassword) return res.status(400).json({ message: 'Incorrect currentpassword...' });
        let hashpasssword = await bcrypt.hash(newpassword, 10);
        user = await User.findByIdAndUpdate(user._id, { $set: { password: hashpasssword } }, { new: true });
        res.status(200).json({ message: 'password changed successfully...' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};

// --- hard delete
// exports.deleteUser = async (req, res) => {
//     try {
//         let user = await User.findById(req.query.id);
//         if (!user) return res.status(404).json({ message: 'user not found...' });
//         // user = await User.deleteOne({ _id: req.query.id });
//         // user = await User.findByIdAndDelete(user._id);
//         // res.status(200).json({ message: 'user deleted successfully...' });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: 'internal server error...' });
//     }
// };

// --- soft delete
exports.deleteUser = async (req, res) => {
    try {
        let user = req.user;
        user = await User.findByIdAndUpdate(user._id, { $set: { isDelete: true } }, { new: true });
        res.status(200).json({ message: 'user deleted successfully...' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};

exports.specUser = async (req, res) => {
    try {
        let user = {
            firstName: "hit",
            lastName: "patel",
            email: "hit@gmail.com",
            mobileno: "1234567891",
        }
        res.render('user.ejs', { user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
}


exports.getLogin = (req, res) => {
    res.render('login', {
        title: 'Login',
        canonical: '',
        googleSiteVerification: 'kCT200-J0rfczENRkJQdYCqsDKkUo3Hvr3KZic_otwU',
        description: 'Datta Able Bootstrap admin template made using Bootstrap 4...',
        keywords: 'admin templates, bootstrap admin templates, ...',
        author: 'CodedThemes',
        favicon: 'https://appsrv1-147a1.kxcdn.com/data-able-v100-enh1/images/favicon.ico',
        fontawesomeCss: 'https://appsrv1-147a1.kxcdn.com/data-able-v100-enh1/fonts/fontawesome/css/fontawesome-all.min.css',
        animationCss: 'https://appsrv1-147a1.kxcdn.com/data-able-v100-enh1/plugins/animation/css/animate.min.css',
        styleCss: 'https://appsrv1-147a1.kxcdn.com/data-able-v100-enh1/css/style.css',
        darkCss: 'https://appsrv1-147a1.kxcdn.com/data-able-v100-enh1/css/dark.css',
        vendorJs: 'https://appsrv1-147a1.kxcdn.com/data-able-v100-enh1/js/vendor-all.min.js',
        bootstrapJs: 'https://appsrv1-147a1.kxcdn.com/data-able-v100-enh1/plugins/bootstrap/js/bootstrap.min.js',
        pcodedJs: 'https://appsrv1-147a1.kxcdn.com/data-able-v100-enh1/js/pcoded.min.js',
        darkModeJs: 'https://appsrv1-147a1.kxcdn.com/data-able-v100-enh1/js/dark-mode.js',
        signUpUrl: '/register',
        resetPasswordUrl: '/reset'
    });
};

exports.postLogin = (req, res) => {
    const { email, password } = req.body;
    console.log('Login attempt:', { email, password });
    res.redirect('/login');
};


exports.getRegistration = (req, res) => {
    res.render('register', {
        title: 'Register Employee',
        canonical: '',
        googleSiteVerification: 'kCT200-J0rfczENRkJQdYCqsDKkUo3Hvr3KZic_otwU',
        description: 'Datta Able Bootstrap admin template made using Bootstrap 4...',
        keywords: 'admin templates, bootstrap admin templates, ...',
        author: 'CodedThemes',
        favicon: 'https://appsrv1-147a1.kxcdn.com/data-able-v100-enh1/images/favicon.ico',
        fontawesomeCss: 'https://appsrv1-147a1.kxcdn.com/data-able-v100-enh1/fonts/fontawesome/css/fontawesome-all.min.css',
        animationCss: 'https://appsrv1-147a1.kxcdn.com/data-able-v100-enh1/plugins/animation/css/animate.min.css',
        styleCss: 'https://appsrv1-147a1.kxcdn.com/data-able-v100-enh1/css/style.css',
        darkCss: 'https://appsrv1-147a1.kxcdn.com/data-able-v100-enh1/css/dark.css',
        formAction: '/register', // URL for form submission
        loginUrl: '/login', // URL to login page
        vendorJs: 'https://appsrv1-147a1.kxcdn.com/data-able-v100-enh1/js/vendor-all.min.js',
        bootstrapJs: 'https://appsrv1-147a1.kxcdn.com/data-able-v100-enh1/plugins/bootstrap/js/bootstrap.min.js',
        pcodedJs: 'https://appsrv1-147a1.kxcdn.com/data-able-v100-enh1/js/pcoded.min.js',
        darkModeJs: 'https://appsrv1-147a1.kxcdn.com/data-able-v100-enh1/js/dark-mode.js'
    });
};

exports.postRegistration = (req, res) => {
    const { first_name, last_name, emp_email, emp_phone, password, department, age } = req.body;
    console.log('Registration attempt:', { first_name, last_name, emp_email, emp_phone, password, department, age });
    res.redirect('/login');
};