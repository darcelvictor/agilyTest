export const getDayName = (data) => {
    // const today = new Date(data).getDay();
    const today = new Date(data * 1000).getDay();
    console.log(today);
    const days = [
        "Dimanche",
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
    ];
    return days[today];
};

export const temp = (x) => {
    x = x - 273.15;
    x = x.toLocaleString(undefined, { minimumFractionDigits: 2 });
    return x;
};

export const getMonthName = (data) => {
    const today = new Date(data * 1000).getMonth();

    const months = [
        "janvier",
        "fevrier",
        "mars",
        "avril",
        "mai",
        "juin",
        "juillet",
        "aout",
        "septembre",
        "octobre",
        "novembre",
        "decembre",
    ];
    return months[today];
};
