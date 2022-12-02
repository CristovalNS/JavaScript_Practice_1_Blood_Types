function canGiveBlood(b1, b2){
    const O1 = ['O+', 'A+', 'B+', 'AB+'];
    const O0 = ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'];

    const A1 = ['A+', 'AB+'];
    const A0 = ['A+', 'A-', 'AB+','AB-'];

    const B1 = ['B+', 'AB+'];
    const B0 = ['B+', 'B-', 'AB+','AB-'];

    const AB1 = ['AB+'];
    const AB0 = ['AB+', 'AB-'];

    if (b1 === "O+" && O1.includes(b2)){
        return true;
    } else if (b1 === "O-" && O0.includes(b2)){
        return true;
    } else if (b1 === "A+" && A1.includes(b2)){
        return true;
    } else if (b1 === "A-" && A0.includes(b2)){
        return true;
    } else if (b1 === "B+" && B1.includes(b2)){
        return true;
    } else if (b1 === "B-" && B0.includes(b2)){
        return true;
    } else if (b1 === "AB+" && AB1.includes(b2)){
        return true;
    }  else if (b1 === "AB-" && AB0.includes(b2)){
        return true;
    } else {
        return false;
    }       
}

console.log("Testing output result:")
console.log("(O+ to A+): ", canGiveBlood("O+", "A+"));
console.log("(A- to B-): ", canGiveBlood("A-", "B-"));
console.log("(A- to AB+): ", canGiveBlood("A-", "AB+")); 
