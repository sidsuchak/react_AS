import React from "react";
import ReactDOM from "react-dom/client";

//OLD WAY OF WRITING REACT ELEMENTS:

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "My name is Sid2.0"
// );

/*FOOD ORDERING APP PLANNING LAYOUT

  - Header
  - Nav items
  - Restaurant list
    - Restaurant card
  -Footer
 */

const zomatoData = [
  {
    type: "restaurant",
    info: {
      resId: 21152686,
      name: "Shawarmaji",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/6/21152686/d6c689be69b8ec606385b84b806f07af_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/6/21152686/d6c689be69b8ec606385b84b806f07af_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.2",
        rating_text: "4.2",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "1,666",
        subtext: "REVIEW",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "100",
            },
            textColorV2: {
              type: "green",
              tint: "500",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.2",
            reviewCount: "1,666",
            reviewTextSmall: "1,666 Reviews",
            subtext: "1,666 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹350 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Matunga East, Mumbai",
        address:
          "Plot 471, Ground Floor, Radha Building, King Circle, H Adenwala Road, Matunga East, Mumbai",
        localityUrl: "mumbai/matunga-east-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTYxXCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/shawarma/",
          name: "Shawarma",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTk4XCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/salad/",
          name: "Salad",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjZcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/lebanese/",
          name: "Lebanese",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "15 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/mumbai/shawarmaji-matunga-east/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/mumbai/shawarmaji-matunga-east/order",
      clickActionDeeplink: "",
    },
    distance: "925 m",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"9b6aebf1-0d72-4468-b91a-c467df541806","location_type":"delivery_cell","location_id":"4316646509572521984","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"21152686","element_type":"listing","rank":1}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "10% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19615674,
      name: "Souffle",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/4/19615674/158a40a52ae76c8a00071ffc2db88e38_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/4/19615674/158a40a52ae76c8a00071ffc2db88e38_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "271",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.5",
            reviewCount: "5",
            reviewTextSmall: "5 Reviews",
            subtext: "5 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.5",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.2",
            reviewCount: "266",
            reviewTextSmall: "266 Reviews",
            subtext: "266 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.2",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹500 for two",
      },
      cfo: {
        text: "₹200 for one",
      },
      locality: {
        name: "Matunga East, Mumbai",
        address:
          "468/6A, Shop 6-A, Ground Floor, Kalyan Bhuvan, Kings Circle, Opposite Maheshwari Udyan, Matunga East, Mumbai",
        localityUrl: "mumbai/matunga-east-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/mumbai/restaurants/bakery/",
          name: "Bakery",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/fast-food/",
          name: "Fast Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹200 for one",
      },
    },
    order: {
      deliveryTime: "24 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/mumbai/souffle-matunga-east/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/mumbai/souffle-matunga-east/order",
      clickActionDeeplink: "",
    },
    distance: "1000 m",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"9b6aebf1-0d72-4468-b91a-c467df541806","location_type":"delivery_cell","location_id":"4316646509572521984","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19615674","element_type":"listing","rank":2}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "Flat 15% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 46736,
      name: "Relax Fast Food",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/6/46736/351dad4761684ca3425999c7931f4088_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/6/46736/351dad4761684ca3425999c7931f4088_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "2,522",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.5",
            reviewCount: "246",
            reviewTextSmall: "246 Reviews",
            subtext: "246 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.5",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "2,276",
            reviewTextSmall: "2,276 Reviews",
            subtext: "2,276 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹300 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Wadala, Mumbai",
        address:
          "Shop 2, Plot 161, Floor D, Saikrupa Building, Road 10, Near UDCT College, Wadala, Mumbai",
        localityUrl: "mumbai/wadala-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/street-food/",
          name: "Street Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/mumbai/restaurants/shake/",
          name: "Shake",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "19 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/mumbai/relax-fast-food-wadala/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/mumbai/relax-fast-food-wadala/order",
      clickActionDeeplink: "",
    },
    distance: "557 m",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"9b6aebf1-0d72-4468-b91a-c467df541806","location_type":"delivery_cell","location_id":"4316646509572521984","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"46736","element_type":"listing","rank":3}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "₹100 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20747222,
      name: "Hotel Marathi Tadka",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/2/20747222/8fc27a6d267aeb76c6cfc87b9dd355e7_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/2/20747222/8fc27a6d267aeb76c6cfc87b9dd355e7_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "4,828",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "3",
            reviewTextSmall: "3 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "100",
            },
            textColorV2: {
              type: "green",
              tint: "500",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "4,825",
            reviewTextSmall: "4,825 Reviews",
            subtext: "4,825 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹300 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Dadar East, Mumbai",
        address:
          "Shop 13, Telwala Chawl, G.D Ambekar Road, Naigaon, Dadar East, Mumbai",
        localityUrl: "mumbai/dadar-east-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/chinese/",
          name: "Chinese",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "24 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/mumbai/hotel-marathi-tadka-dadar-east/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/mumbai/hotel-marathi-tadka-dadar-east/order",
      clickActionDeeplink: "",
    },
    distance: "1.4 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"9b6aebf1-0d72-4468-b91a-c467df541806","location_type":"delivery_cell","location_id":"4316646509572521984","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20747222","element_type":"listing","rank":4}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "₹100 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19539234,
      name: "Domino's Pizza",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/4/19539234/6a304e10f4a969436c08d9a651732dd6_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/4/19539234/6a304e10f4a969436c08d9a651732dd6_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.3",
        rating_text: "3.3",
        rating_subtitle: "Average",
        rating_color: "CDD614",
        votes: "4,097",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "2.8",
            reviewCount: "37",
            reviewTextSmall: "37 Reviews",
            subtext: "37 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "2.8",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "yellow",
              tint: "400",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.7",
            reviewCount: "4,060",
            reviewTextSmall: "4,060 Reviews",
            subtext: "4,060 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.7",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹400 for two",
      },
      cfo: {
        text: "₹200 for one",
      },
      locality: {
        name: "Matunga West, Mumbai",
        address:
          "Shop 12 - 13, Plot 706/707, Ground Floor, B-Wing, Issardas Varandmal, Dadar, Matunga West, Mumbai",
        localityUrl: "mumbai/matunga-west-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/beverages/",
          name: "Beverages",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/desserts/",
          name: "Desserts",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹200 for one",
      },
    },
    order: {
      deliveryTime: "22 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/mumbai/dominos-pizza-matunga-west/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/mumbai/dominos-pizza-matunga-west/order",
      clickActionDeeplink: "",
    },
    distance: "424 m",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"9b6aebf1-0d72-4468-b91a-c467df541806","location_type":"delivery_cell","location_id":"4316646509572521984","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19539234","element_type":"listing","rank":5}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "50% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20429404,
      name: "KFC",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/4/20429404/22cde0c65c7afa92557454cf692de99e_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/4/20429404/22cde0c65c7afa92557454cf692de99e_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "8,590",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "100",
            },
            textColorV2: {
              type: "green",
              tint: "500",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.8",
            reviewCount: "8,590",
            reviewTextSmall: "8,590 Reviews",
            subtext: "8,590 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.8",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹450 for two",
      },
      cfo: {
        text: "₹200 for one",
      },
      locality: {
        name: "Dadar Shivaji Park, Mumbai",
        address:
          "Unit 4, Ground Floor, Kohinoor Square, N.C. Kelkar Marg, R.G. Gadkari Chowk, Dadar Shivaji Park, Mumbai",
        localityUrl: "mumbai/dadar-shivaji-park-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/beverages/",
          name: "Beverages",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTkzXCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/bbq/",
          name: "BBQ",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹200 for one",
      },
    },
    order: {
      deliveryTime: "29 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/mumbai/kfc-dadar-shivaji-park/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/mumbai/kfc-dadar-shivaji-park/order",
      clickActionDeeplink: "",
    },
    distance: "1.8 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"9b6aebf1-0d72-4468-b91a-c467df541806","location_type":"delivery_cell","location_id":"4316646509572521984","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20429404","element_type":"listing","rank":6}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "₹100 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 18953699,
      name: "Kirti Mahal Legacy Since 1938",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/9/18953699/81e30adbd8996fb44983b98d3e90caf1_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/9/18953699/81e30adbd8996fb44983b98d3e90caf1_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "50.6K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.0",
            reviewCount: "405",
            reviewTextSmall: "405 Reviews",
            subtext: "405 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.0",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.1",
            reviewCount: "50.2K",
            reviewTextSmall: "50.2K Reviews",
            subtext: "50.2K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.1",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹800 for two",
      },
      cfo: {
        text: "₹350 for one",
      },
      locality: {
        name: "Parel, Mumbai",
        address:
          "Shop 21, 19, 20, F/S Building, BA Road, Mahapalika, Parel, Mumbai",
        localityUrl: "mumbai/parel-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/mumbai/restaurants/shake/",
          name: "Shake",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹350 for one",
      },
    },
    order: {
      deliveryTime: "27 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/mumbai/kirti-mahal-legacy-since-1938-parel/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/mumbai/kirti-mahal-legacy-since-1938-parel/order",
      clickActionDeeplink: "",
    },
    distance: "2.2 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"9b6aebf1-0d72-4468-b91a-c467df541806","location_type":"delivery_cell","location_id":"4316646509572521984","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"18953699","element_type":"listing","rank":7}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "₹100 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 39150,
      name: "Arya Bhavan",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/0/39150/3bd6b03c3f47be48fcb0813f8c129ff1_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/0/39150/3bd6b03c3f47be48fcb0813f8c129ff1_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.4",
        rating_text: "4.4",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "23.4K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "4.3",
            reviewCount: "1,794",
            reviewTextSmall: "1,794 Reviews",
            subtext: "1,794 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "4.3",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.4",
            reviewCount: "21.6K",
            reviewTextSmall: "21.6K Reviews",
            subtext: "21.6K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.4",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹400 for two",
      },
      cfo: {
        text: "₹200 for one",
      },
      locality: {
        name: "Matunga East, Mumbai",
        address:
          "Shop 9 & 10, Bhanujyoti Building, Opposite Market, Matunga East, Mumbai",
        localityUrl: "mumbai/matunga-east-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/street-food/",
          name: "Street Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/sandwich/",
          name: "Sandwich",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/beverages/",
          name: "Beverages",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/mumbai/restaurants/shake/",
          name: "Shake",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹200 for one",
      },
    },
    order: {
      deliveryTime: "21 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/mumbai/arya-bhavan-matunga-east/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/mumbai/arya-bhavan-matunga-east/order",
      clickActionDeeplink: "",
    },
    distance: "1.2 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"9b6aebf1-0d72-4468-b91a-c467df541806","location_type":"delivery_cell","location_id":"4316646509572521984","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"39150","element_type":"listing","rank":8}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "₹100 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 48010,
      name: "McDonald's",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/0/48010/2420e4c0eadfc1db1d931627d378fba0_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/0/48010/2420e4c0eadfc1db1d931627d378fba0_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.8",
        rating_text: "3.8",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "25.2K",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.5",
            reviewCount: "1,034",
            reviewTextSmall: "1,034 Reviews",
            subtext: "1,034 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.5",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "500",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.0",
            reviewCount: "24.1K",
            reviewTextSmall: "24.1K Reviews",
            subtext: "24.1K Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.0",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹600 for two",
      },
      cfo: {
        text: "₹250 for one",
      },
      locality: {
        name: "Dadar West, Mumbai",
        address: "Star Mall, NC Kelkar Road, Kelkar Wadi, Dadar West, Mumbai",
        localityUrl: "mumbai/dadar-west-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/beverages/",
          name: "Beverages",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/mumbai/restaurants/coffee/",
          name: "Coffee",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/mumbai/restaurants/american/",
          name: "American",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzNcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/mexican/",
          name: "Mexican",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/street-food/",
          name: "Street Food",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹250 for one",
      },
    },
    order: {
      deliveryTime: "30 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/mumbai/mcdonalds-dadar-west/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/mumbai/mcdonalds-dadar-west/order",
      clickActionDeeplink: "",
    },
    distance: "1.6 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"9b6aebf1-0d72-4468-b91a-c467df541806","location_type":"delivery_cell","location_id":"4316646509572521984","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"48010","element_type":"listing","rank":9}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19936217,
      name: "Pizza Hut",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/7/19936217/8992b8a83811fd4bed7dd97d1aec5f04_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/7/19936217/8992b8a83811fd4bed7dd97d1aec5f04_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.5",
        rating_text: "3.5",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "6,864",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "3.2",
            reviewCount: "94",
            reviewTextSmall: "94 Reviews",
            subtext: "94 Dining Reviews",
            color: "#1C1C1C",
            ratingV2: "3.2",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "yellow",
              tint: "400",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.8",
            reviewCount: "6,770",
            reviewTextSmall: "6,770 Reviews",
            subtext: "6,770 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.8",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹300 for two",
      },
      cfo: {
        text: "₹150 for one",
      },
      locality: {
        name: "Dadar Shivaji Park, Mumbai",
        address:
          "Kohinoor Square, NC Kelkar Road, Greater Mumbai Ward-G/N, Dadar Shivaji Park, Mumbai",
        localityUrl: "mumbai/dadar-shivaji-park-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/italian/",
          name: "Italian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/mumbai/restaurants/beverages/",
          name: "Beverages",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹150 for one",
      },
    },
    order: {
      deliveryTime: "36 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/mumbai/pizza-hut-dadar-shivaji-park/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/mumbai/pizza-hut-dadar-shivaji-park/order",
      clickActionDeeplink: "",
    },
    distance: "1.8 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"9b6aebf1-0d72-4468-b91a-c467df541806","location_type":"delivery_cell","location_id":"4316646509572521984","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19936217","element_type":"listing","rank":10}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "40% OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 19946622,
      name: "Chinese Wok",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/2/19946622/b65d90ef59e2d012cc55c6d44faf8d67_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/2/19946622/b65d90ef59e2d012cc55c6d44faf8d67_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "5,784",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "100",
            },
            textColorV2: {
              type: "green",
              tint: "500",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "3.9",
            reviewCount: "5,784",
            reviewTextSmall: "5,784 Reviews",
            subtext: "5,784 Delivery Reviews",
            color: "#E23744",
            ratingV2: "3.9",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "600",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹700 for two",
      },
      cfo: {
        text: "₹300 for one",
      },
      locality: {
        name: "Wadala, Mumbai",
        address:
          "G-22, First Part, Shoppe Link Building, Dosti Acer Shopping Center, Shaikh Misery Road, Near Antop Hill Bus Depot, Wadala, Mumbai",
        localityUrl: "mumbai/wadala-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA1MVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/mumbai/restaurants/momos/",
          name: "Momos",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹300 for one",
      },
    },
    order: {
      deliveryTime: "24 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/mumbai/chinese-wok-wadala/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/mumbai/chinese-wok-wadala/order",
      clickActionDeeplink: "",
    },
    distance: "1.1 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"9b6aebf1-0d72-4468-b91a-c467df541806","location_type":"delivery_cell","location_id":"4316646509572521984","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"19946622","element_type":"listing","rank":11}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "₹300 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
  {
    type: "restaurant",
    info: {
      resId: 20534694,
      name: "Big Bowl",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/4/20534694/865b0e4d686a06346110004a4cdeae38_o2_featured_v2.jpg",
      },
      o2FeaturedImage: {
        url: "https://b.zmtcdn.com/data/pictures/4/20534694/865b0e4d686a06346110004a4cdeae38_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.3",
        rating_text: "4.3",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "3,018",
        subtext: "REVIEWS",
        is_new: false,
      },
      ratingNew: {
        newlyOpenedObj: null,
        suspiciousReviewObj: null,
        ratings: {
          DINING: {
            rating_type: "DINING",
            rating: "",
            reviewCount: "0",
            reviewTextSmall: "0 Reviews",
            subtext: "Does not offer Dining",
            color: "",
            ratingV2: "-",
            subtitle: "DINING",
            sideSubTitle: "Dining Ratings",
            bgColorV2: {
              type: "green",
              tint: "100",
            },
            textColorV2: {
              type: "green",
              tint: "500",
            },
            newOnDining: false,
          },
          DELIVERY: {
            rating_type: "DELIVERY",
            rating: "4.3",
            reviewCount: "3,018",
            reviewTextSmall: "3,018 Reviews",
            subtext: "3,018 Delivery Reviews",
            color: "#E23744",
            ratingV2: "4.3",
            subtitle: "DELIVERY",
            sideSubTitle: "Delivery Ratings",
            bgColorV2: {
              type: "green",
              tint: "700",
            },
            newOnDelivery: false,
          },
        },
      },
      cft: {
        text: "₹500 for two",
      },
      cfo: {
        text: "₹200 for one",
      },
      locality: {
        name: "Mahim, Mumbai",
        address:
          "Shop 3/10, Bhagirathi Sadan, Veer Savarkar Marg, Mahim, Mumbai",
        localityUrl: "mumbai/mahim-restaurants",
      },
      timing: {
        text: "",
        color: "",
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/mumbai/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA1MVwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/mumbai/restaurants/momos/",
          name: "Momos",
        },
      ],
      should_ban_ugc: false,
      costText: {
        text: "₹200 for one",
      },
    },
    order: {
      deliveryTime: "35 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/mumbai/big-bowl-mahim/order",
      },
    },
    gold: [],
    takeaway: [],
    cardAction: {
      text: "",
      clickUrl: "/mumbai/big-bowl-mahim/order",
      clickActionDeeplink: "",
    },
    distance: "2.3 km",
    isPromoted: false,
    promotedText: "",
    trackingData: [
      {
        table_name: "zsearch_events_log",
        payload:
          '{"search_id":"9b6aebf1-0d72-4468-b91a-c467df541806","location_type":"delivery_cell","location_id":"4316646509572521984","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20534694","element_type":"listing","rank":12}',
        event_names: {
          tap: '{"action":"tap"}',
          impression: '{"action":"impression"}',
        },
      },
    ],
    allCTA: [],
    promoOffer: "",
    checkBulkOffers: true,
    bulkOffers: [
      {
        text: "₹300 OFF",
        color: {
          tint: "500",
          type: "blue",
        },
      },
    ],
    isDisabled: false,
    bottomContainers: [],
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/thumbnails/055/349/890/small/chef-mascot-logo-design-for-restaurant-cooking-man-tasty-express-food-illustration-vector.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ data }) => {
  const { image, name, cuisine, cft, rating } = data;
  return (
    <div className="restaurant-card">
      <img className="restaurant-image" src={image.url} />
      <h3>{name}</h3>
      <h4>{cuisine.map((x) => x.name).join(", ")}</h4>
      <h4>{cft.text}</h4>
      <h4>{rating.rating_text} Stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-component">
        {zomatoData.map((response) => (
          <RestaurantCard data={response.info} key={response.info.resId} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
