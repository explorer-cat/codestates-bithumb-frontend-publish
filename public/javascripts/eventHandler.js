
const setDetailView = (event) => {
    let target = event.target;

    /* 선택한 타겟 카드가 접힌 상태인지 확인한다.*/
    let cardStatus = false
    let detailCard

    target.closest(".not-detail-card") ? cardStatus = false : cardStatus = true



    /* targetStatus에 not-detail-card 클래스가 존재한다면 자세히 보지않는 카드이다.*/
    if (!cardStatus) {
        detailCard = target.closest(".not-detail-card")

        detailCard.classList.remove("not-detail-card");
        detailCard.classList.add("detail-card");
    }
    else {
        /* not-detail-card 클래스가 존재하지 않는다면 자세히 보기 상태인 카드이다. */
        detailCard = target.closest(".detail-card")

        detailCard.classList.remove("detail-card");
        detailCard.classList.add("not-detail-card");
    }
}

const setAllCardOpenClose = (event) => {
    const code = ["BTC", "ETH", "XRP", "BCH", "MATIC"]
    let allCard = document.querySelectorAll(".small-card");


    if (event.target.id === "open_all_card") {
        document.querySelector("#close_all_card").checked = false;

        code.forEach(function (item, index) {
            document.getElementById("container_" + item).style.display = "none"
            allCard[index].classList.add("fixed_open_card")
        })

    }
    else if (event.target.id === "close_all_card") {
        document.querySelector("#open_all_card").checked = false;

        code.forEach(function (item, index) {
            document.getElementById("container_" + item).style.display = ""
            allCard[index].classList.remove("fixed_open_card")
        })


    }



}

const setChangeToColor = (change, el) => {
    if (change === "up") {
        el.classList.add("up_red_color")
        el.classList.remove("down_blue_color")
    } else {
        el.classList.add("down_blue_color")
        el.classList.remove("up_red_color")
    }
}


const setChart = (event) => {
    let target = event.target;
    let targetName = ["btc_chart", "eth_chart", "xrp_chart", "bch_chart", "matic_chart"];

    switch (target.id) {
        case "bit_chart":
            if (document.querySelector(".btc_chart").style.getPropertyValue("display") === "none") {
                for (let i = 0; i < targetName.length; i++) {
                    if (targetName[i] !== "btc_chart") {
                        document.getElementsByClassName(targetName[i])[0].style.display = "none"
                    } else {
                        document.getElementsByClassName(targetName[i])[0].style.display = ""
                    }
                }
            }
            break;
        case "eth_chart":
            if (document.querySelector(".eth_chart").style.getPropertyValue("display") === "none") {
                for (let i = 0; i < targetName.length; i++) {
                    if (targetName[i] !== "eth_chart") {
                        document.getElementsByClassName(targetName[i])[0].style.display = "none"
                    } else {
                        document.getElementsByClassName(targetName[i])[0].style.display = ""
                    }
                }
            }
            break;
        case "xrp_chart":
            if (document.querySelector(".xrp_chart").style.getPropertyValue("display") === "none") {
                for (let i = 0; i < targetName.length; i++) {
                    if (targetName[i] !== "xrp_chart") {
                        document.getElementsByClassName(targetName[i])[0].style.display = "none"
                    } else {
                        document.getElementsByClassName(targetName[i])[0].style.display = ""
                    }
                }
            }
            break;
        case "bch_chart":
            if (document.querySelector(".bch_chart").style.getPropertyValue("display") === "none") {
                for (let i = 0; i < targetName.length; i++) {
                    if (targetName[i] !== "bch_chart") {
                        document.getElementsByClassName(targetName[i])[0].style.display = "none"
                    } else {
                        document.getElementsByClassName(targetName[i])[0].style.display = ""
                    }
                }
            }
            break;
        case "matic_chart":
            if (document.querySelector(".matic_chart").style.getPropertyValue("display") === "none") {
                for (let i = 0; i < targetName.length; i++) {
                    if (targetName[i] !== "matic_chart") {
                        document.getElementsByClassName(targetName[i])[0].style.display = "none"
                    } else {
                        document.getElementsByClassName(targetName[i])[0].style.display = ""
                    }
                }
            }
            break;

    }


}