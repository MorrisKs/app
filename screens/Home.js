import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList
} from 'react-native';
{
    "expo"; {
      "jsEngine"; "hermes",
      "ios"; {
        "jsEngine"; "jsc"
      }
    }
  }

import { COLORS, FONTS, SIZES, icons, images } from '../constants';

const LineDivider = () => {
    return (
        <View style={{ width: 1, paddingVertical: 18 }}>
            <View style={{ flex: 1, borderLeftColor: COLORS.lightGray, borderLeftWidth: 1 }}></View>
        </View>
    )
}

const Home = ({ navigation }) => {

    const profileData = {
        name: 'Username',
        point: 200
    }

    const bookOtherWordsForHome = {
        id: 1,
        bookName: "React Native",
        bookCover: images.otherWordsForHome,
        rating: 4.5,
        language: "MGL",
        pageNo: 341,
        author: "Мөнх-Эрдэнэ",
        genre: [
            "Pdf lesson"
        ],
        readed: "12k",
        description: "Энэ бол Javascript, React хоёрын хослол юм. Та React, Javascript хоёрыг ашиглан хүчирхэг SPA вэб апп, iOS апп, андройд апп, UWP (universal windows platform app), pwa (progressive web app), энгийн windows програм (electron) гээд л бүгдийг хийж чадна. Back end-ээ мөн л Javascript ашиглан (NodeJS, Express, MongoDB) хийж орхино. Өөрөөр хэлбэл React дээр ажилладаг вэбийн багийнхан одоо шууд нэмж юм суралгүйгээр гар утасны аппуудыг бүтээх чадвартай гэсэн үг юм. Ер нь React нь өөрөө ч цэвэр Javascript шүү дээ! Тиймээс бүр цаадах утгаараа ганцхан технологи ч гэж хэлж болох нь...",
        backgroundColor: "rgba(240,240,232,0.9)",
        navTintColor: "#000"
    }

    const bookTheMetropolis = {
        id: 2,
        bookName: "JavaScript",
        bookCover: images.theMetropolist,
        rating: 4.1,
        language: "Eng",
        pageNo: 272,
        author: "Seith Fried",
        genre: [
            "PDF Lesson", "New"
        ],
        readed: "13k",
        description: "JavaScript нь компьютерын хөрвүүлэгддэг програмын хэл. Энэ нь вэб хөтчийн хэрэглэгчид үйлчлэх хэсэг болон дэлгэцэнд харагддаг. JavaScript нь прототайпад суурилсан скриптийн хэл бөгөөд динамик, өгөгдлийн сул төрөлжүүлэлттэй, нэгдүгээр зэргийн функцуудтай хэл юм. Энэ нь объект хандлагат, исператив, функциональ програмчлалын хэв маягуудыг дэмждэг олон парадигмт хэл юм. Java, JavaScript хоёул C төрлийн хэл учир синтакс нь л төстэй болохоос хоорондоо ямар ч холбоогүй тусдаа хэлнүүд юм. ЖаваСкриптыг анх netscape компаниас хөгжүүлсэн. Mocha нэрэн дор хөгжүүлж байгаад 1995 оны 9 сард netscape 2.0 -ын туршилтын хувилбар гарахад livescript гэх нэрээ олсон. Гэхдээ netscape 2.0B3 хувилбар гарахад нэрийг нь өөрчилж JavaScript болгосон. Netscape Navigator вэб хөтчинд жава технологийг орлохуйц байж чадна гэсэн үүднээс нэрийг жаваскрипт болгон өөрчилсөн.1994 оны 12 сард Netscape компаниас Netscape Enterprise Server дэх сервер талын скрипт хэлний хэрэгжүүлэлтийг танилцуулсан. 2000 оны дундаас сервер талын жаваскрипт тархаж эхэлсэн бөгөөд Node.js нь зөвхөн сервер талд ашиглагдах бус аппликэйшнд ч ашиглагдаж эхэлсэн.",
        backgroundColor: "rgba(247,239,219,0.9)",
        navTintColor: "#000"
    }

    const bookTheTinyDragon = {
        id: 3,
        bookName: "HTML",
        bookCover: images.theTinyDragon,
        rating: 3.5,
        language: "Eng",
        pageNo: 110,
        author: "Ana C ",
        genre: [
            "PDF Lesson", "Video Lesson", "Old"
        ],
        readed: "13k",
        description: "Вэб хөтөч HTML файлыг уншиж, харагдах, эсвэл дуут вэб хуудсанд болгон зохиож болох юм. хөтөч HTML хаягууд болон скриптүүдийг харуулах, харин хуудасны агуулгыг тайлбарлах нь ашигладаг байна. HTML нь бүтцийг тайлбарлах Вэб сайт бүдүүвчлэх нь нэг тэмдэглэгээний хэл, оронд нь гаргах, хамт толилуулгын дохионд нь програмчлалын хэл . HTML элементүүд нь бүх вэб сайт нь барилгын тоосго нь болдог. HTML боломжтой зураг, объект оруулах үүсгэх болон ашиглах боломжтойинтерактив хэлбэр . Энэ нь бий болгох арга хангадаг зохион баримт бүтцийн тэмдэглэсэн замаар семантиксийг ийм гарчиг, зүйлийн, жагсаалт гэх мэт текстийг холбоосууд , ишлэл болон бусад эд. Энэ нь суулгаж болохскриптүүд зэрэг хэл дээр бичигдсэн JavaScript HTML вэб хуудсанд ажиллагаанд нөлөөлдөг. Вэб хөтөч нь хамааруулж болно Cascading Style Sheets текст болон бусад материалын харагдах, зохион байгуулалт тодорхойлох нь (CSS). World Wide Web Consortium (W3C), HTML болон CSS стандартын аль алинд нь тогтоон барьж, тодорхой танилцуулах HTML дээр CSS хэрэглээг дэмжсэн",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }
    const Java = {
        id: 3,
        bookName: "The Tiny Dragon",
        bookCover: images.theTinyDragon,
        rating: 3.5,
        language: "Eng",
        pageNo: 110,
        author: "Ana C Bouvier",
        genre: [
            "Drama", "Adventure", "Romance"
        ],
        readed: "13k",
        description: "This sketchbook for kids is the perfect tool to improve your drawing skills! Designed to encourage kids around the world to express their uniqueness through drawing, sketching or doodling, this sketch book is filled with 110 high quality blank pages for creations. Add some fun markers, crayons, and art supplies and you have the perfect, easy gift for kids!",
        backgroundColor: "rgba(119,77,143,0.9)",
        navTintColor: "#FFF"
    }
    const myBooksData = [
        {
            ...ReactNative,
            completion: "75%",
            lastRead: "3d 5h",

        },
        {
            ...JavaScript,
            completion: "23%",
            lastRead: "10d 5h",

        },
        {
            ...HTML,
            completion: "10%",
            lastRead: "1d 2h",

        }
    ]

    const categoriesData = [
        {
            id: 1,
            categoryName: "Шинэ хичээл",
            books: [
                bookOtherWordsForHome, bookTheMetropolis, bookTheTinyDragon
            ]
        },
        {
            id: 2,
            categoryName: "Сүүлд нэмэгдсэн",
            books: [
                bookTheMetropolis
            ]
        },
        {
            id: 3,
            categoryName: "Удахгүй нэмэгдэх хичээл",
            books: [
                bookTheTinyDragon
            ]
        },
    ]

    const [profile, setProfile] = React.useState(profileData);
    const [myBooks, setMyBooks] = React.useState(myBooksData);
    const [categories, setCategories] = React.useState(categoriesData);
    const [selectedCategory, setSelectedCategory] = React.useState(1);

    function renderHeader(profile) {
        return (
            <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: SIZES.padding, alignItems: 'center' }}>
                {/* Greetings */}
                <View style={{ flex: 1 }}>
                    <View style={{ marginRight: SIZES.padding }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>Good Morning</Text>
                        <Text style={{ ...FONTS.h2, color: COLORS.white }}>CSE-Learning</Text>
                    </View>
                </View>

                {/* Points */}
                <TouchableOpacity
                    style={{
                        backgroundColor: COLORS.primary,
                        height: 40,
                        paddingLeft: 3,
                        paddingRight: SIZES.radius,
                        borderRadius: 20
                    }}
                    onPress={() => { console.log("Point") }}
                >
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 25, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                            <Image
                                source={icons.plus_icon}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20
                                }}
                            />
                        </View>

                        <Text style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.body3 }}>{profile.point} point</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    function renderButtonSection() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', padding: SIZES.padding }}>
                <View style={{ flexDirection: 'row', height: 70, backgroundColor: COLORS.secondary, borderRadius: SIZES.radius }}>
                    {/* Claim */}
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => console.log("Claim")}
                    >
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={icons.claim_icon}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                            />
                            <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>Хичээл</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Divider */}
                    <LineDivider />

                    {/* Get Point */}
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => console.log("Get Point")}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={icons.point_icon}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                            />
                            <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>Task</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Divider */}
                    <LineDivider />

                    {/* My Card */}
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => console.log("My Card")}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={icons.card_icon}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                            />
                            <Text style={{ marginLeft: SIZES.base, ...FONTS.body3, color: COLORS.white }}>Видео Хичээл</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderMyBookSection(myBooks) {

        const renderItem = ({ item, index }) => {
            return (
                <TouchableOpacity
                    style={{
                        flex: 1,
                        marginLeft: index == 0 ? SIZES.padding : 0,
                        marginRight: SIZES.radius
                    }}
                    onPress={() => navigation.navigate("BookDetial", {
                        book: item
                    })}
                >
                    {/* Book Cover */}
                    <Image
                        source={item.bookCover}
                        resizeMode="cover"
                        style={{
                            width: 180,
                            height: 250,
                            borderRadius: 20
                        }}
                    />

                    {/* Book Info */}
                    <View style={{ marginTop: SIZES.radius, flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={icons.clock_icon}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightGray
                            }}
                        />
                        <Text style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray }}>{item.lastRead}</Text>

                        <Image
                            source={icons.page_icon}
                            style={{
                                marginLeft: SIZES.radius,
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightGray
                            }}
                        />
                        <Text style={{ marginLeft: 5, ...FONTS.body3, color: COLORS.lightGray }}>{item.completion}</Text>
                    </View>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ flex: 1 }}>
                {/* Header */}
                <View style={{ paddingHorizontal: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ ...FONTS.h2, color: COLORS.white }}>Хичээл</Text>

                    <TouchableOpacity
                        onPress={() => console.log("See More")}
                    >
                        <Text style={{ ...FONTS.body3, color: COLORS.lightGray, alignSelf: 'flex-start', textDecorationLine: 'underline' }}>see more</Text>
                    </TouchableOpacity>
                </View>

                {/* Books */}
                <View style={{ flex: 1, marginTop: SIZES.padding }}>
                    <FlatList
                        data={myBooks}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        )
    }

    function renderCategoryHeader() {

        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{ flex: 1, marginRight: SIZES.padding }}
                    onPress={() => setSelectedCategory(item.id)}
                >
                    {
                        selectedCategory == item.id &&
                        <Text style={{ ...FONTS.h2, color: COLORS.white }}>{item.categoryName}</Text>
                    }
                    {
                        selectedCategory != item.id &&
                        <Text style={{ ...FONTS.h2, color: COLORS.lightGray }}>{item.categoryName}</Text>
                    }
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ flex: 1, paddingLeft: SIZES.padding }}>
                <FlatList
                    data={categories}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                />
            </View>
        )
    }

    function renderCategoryData() {
        var books = []

        let selectedCategoryBooks = categories.filter(a => a.id == selectedCategory)

        if (selectedCategoryBooks.length > 0) {
            books = selectedCategoryBooks[0].books
        }

        const renderItem = ({ item }) => {
            return (
                <View style={{ marginVertical: SIZES.base }}>
                    <TouchableOpacity
                        style={{ flex: 1, flexDirection: 'row' }}
                        onPress={() => navigation.navigate("BookDetail", {
                            book: item
                        })}
                    >
                        {/* Book Cover */}
                        <Image
                            source={item.bookCover}
                            resizeMode="cover"
                            style={{ width: 100, height: 150, borderRadius: 10 }}
                        />

                        <View style={{ flex: 1, marginLeft: SIZES.radius }}>
                            {/* Book name and author */}
                            <View>
                                <Text style={{ paddingRight: SIZES.padding, ...FONTS.h2, color: COLORS.white }}>{item.bookName}</Text>
                                <Text style={{ ...FONTS.h3, color: COLORS.lightGray }}>{item.author}</Text>
                            </View>

                            {/* Book Info */}
                            <View style={{ flexDirection: 'row', marginTop: SIZES.radius }}>
                                <Image
                                    source={icons.page_filled_icon}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: COLORS.lightGray
                                    }}
                                />
                                <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>{item.pageNo}</Text>

                                <Image
                                    source={icons.read_icon}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: COLORS.lightGray
                                    }}
                                />
                                <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>{item.readed}</Text>
                            </View>

                            {/* Genre */}
                            <View style={{ flexDirection: 'row', marginTop: SIZES.base }}>
                                {
                                    item.genre.includes("PDF Lesson") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkGreen, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>Adventure</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("Video Lesson") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkRed, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightRed }}>Romance</Text>
                                    </View>
                                }
                                {
                                    item.genre.includes("New") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightBlue }}>Drama</Text>
                                    </View>
                                }
                                  {
                                    item.genre.includes("Old") &&
                                    <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                                        <Text style={{ ...FONTS.body3, color: COLORS.lightBlue }}>Drama</Text>
                                    </View>
                                }
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* Bookmark Button */}
                    <TouchableOpacity
                        style={{ position: 'absolute', top: 5, right: 15 }}
                        onPress={() => console.log("Bookmark")}
                    >
                        <Image
                            source={icons.bookmark_icon}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: COLORS.lightGray
                            }}
                        />
                    </TouchableOpacity>
                </View>
            )
        }

        return (
            <View style={{ flex: 1, marginTop: SIZES.radius, paddingLeft: SIZES.padding }}>
                <FlatList
                    data={books}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
            {/* Header Section */}
            <View style={{ height: 200 }}>
                {renderHeader(profile)}
                {renderButtonSection()}
            </View>

            {/* Body Section */}
            <ScrollView style={{ marginTop: SIZES.radius }}>
                {/* Books Section */}
                <View>
                    {renderMyBookSection(myBooks)}
                </View>

                {/* Categories Section */}
                <View style={{ marginTop: SIZES.padding }}>
                    <View>
                        {renderCategoryHeader()}
                    </View>
                    <View>
                        {renderCategoryData()}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;