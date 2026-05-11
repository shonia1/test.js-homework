{
    /* გაფილტვრა (ხელით): ამოიღე მასივიდან მეორე ელემენტი (id:002-editor-leVan) და შეინახე ცალკე ცვლადში სახელით deletedUser.
    დამუშავება: დარჩენილ მასივში (rawUsers) მყოფი სტრინგებიდან უნდა მიიღო მხოლოდ სახელები ("Nika" და "Giorgi").
    მინიშნება: ჯერ გამოიყენე trim(), შემდეგ split("-"). დაფიქრდი, რომელ ინდექსზე იქნება სახელი დაყოფის შემდეგ.
    ფორმატირება: სახელები უნდა იყოს "სწორ" ფორმატში: პირველი ასო დიდი, დანარჩენი პატარა (მაგ: "NIKA" -> "Nika").
    შეჯამება: შექმენი ახალი მასივი finalUsers, ჩასვი მასში ეს ორი დამუშავებული სახელი და ბოლოში დაამატე შენი სახელიც.
    სტატისტიკა: კონსოლში დაბეჭდე სტრინგი: "სისტემაში არის (აქ ჩასვი მასივის სიგრძე) მომხმარებელი". */
    
    const rawUsers = ["  id:001-admin-NIka  ", "id:002-editor-leVan ", "  id:003-user-giorgi"] 
    let deletedUser = rawUsers.splice(1,1) //ამოვჭრათ მეორე იუზერი
    let user1 = rawUsers[0].trim().replaceAll(" ","").toLowerCase() //იუზერ1 გავასუფთაოთ
    let user2 = rawUsers[1].trim().replaceAll(" ","").toLowerCase() //იუზერ2 გავასუფთაოთ
    let splitUser1 = user1.split("-") //იუზერ1 დავანაწევროთ "-"ზე
    let splitUser2 = user2.split("-") //იუზერ2 დავანაწევროთ "-"ზე
    let splitUsers = splitUser1.concat(splitUser2) //დანაწევრებული იუზერების მასივები გავაერთიანოთ
    let userNames = [splitUsers[2], splitUsers[5]] //მასივიდან ამოვიღოთ მხოლოდ იუზერების სახელები
    let strNames = userNames.join("").split("") //იუზერების სახელები სტრინგად ვაქციოთ და მერე ასოებად დავსპლიტოთ
    strNames[0] = strNames[0].toUpperCase() //საჭირო ასო გავადიდოთ
    strNames[4] = strNames[4].toUpperCase() //საჭირო ასო გავადიდოთ
    let formatedUserName1 = strNames.slice(0,4).join("") //იუზერ1-ს დაფორმატირებული სახელის ასოები შევაწებოთ
    let formatedUserName2 = strNames.slice(4).join("") //იუზერ2-ს დაფორმატირებული სახელის ასოები შევაწებოთ
    let finalUsers = [formatedUserName1, formatedUserName2] //მასივში ჩავყაროთ დაფორმატირებული სახელები
    finalUsers.push("Dito") //ახალი იუზერი ჩავამატოთ
    console.log(`სისტემაში არის ${finalUsers.length} მომხმარებელი`)

}

{
    /* მასივის დასაწყისში ჩაამატებს "yellow"-ს.
    ბოლოში ჩაამატებს "purple"-ს.
    შუაში ("green"-ის ნაცვლად) ჩასვამს "pink"-ს და "orange"-ს ერთდროულად.
    შედეგი უნდა იყოს: ["yellow", "red", "pink", "orange", "blue", "purple"] */ 
    
    const colors = ["red", "green", "blue"]
    colors.unshift("yellow") //დასაწყისში ჩავამატოთ yellow
    colors.push("purple") //ბოლოში ჩავამატოთ purple
    colors.splice(2,1,"pink","orange") //წავშალთ green და ჩავამატოთ pink და orange
    console.log(colors)
}

{
    //987*654*321
    
    let secret = "123-456-789" 
    let repalceSymbol = secret.replaceAll("-","*") //სიმბოლო "-" შევცვალოთ "*"-ით
    let split = repalceSymbol.split("") //დავსპლიტოთ
    let reverse = split.reverse() //შევატრიალოთ
    let join = reverse.join("") //დავაჯოინოთ

    console.log(join)
}

