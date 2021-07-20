function initMap(){
    
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 34.668461874977616,  lng: 135.43025432614428},
        zoom: 19,
        mapId: 'bae36db9b20da7b4'
      });
            //28.379291220953245, -81.57018152014889 -- Disney World, USA
            //34.667771404531614, 135.43053022596894 -- Nintendo World, Japan
            //34.668461874977616, 135.43025432614428


    new google.maps.Marker({
        position: {lat: 34.667771404531614,  lng: 135.43053022596894},
        map,
        title: "Hello World!",
        animation: google.maps.Animation.DROP,
        icon: {

            url: '451847_star_256x256.png',
            scaledSize: new google.maps.Size(50, 50)

        }
    });

    new google.maps.Marker({

        position: {lat: 34.66819669509534,  lng: 135.43046295303344},
        map,
        title: "Hello World!",
        animation: google.maps.Animation.DROP,
        icon: {

            url: 'Ph03nyx-Super-Mario-Retro-Feather.ico',
            scaledSize: new google.maps.Size(50, 50)

    }
    });

    new google.maps.Marker({

        position: {lat: 34.66907334535318,  lng: 135.42996983493177},
        map,
        title: "Hello World!",
        
        animation: google.maps.Animation.DROP,
        icon: {

            url: '451861_flower_256x256.png',
            scaledSize: new google.maps.Size(50, 50)

    }
    });

    new google.maps.Marker({

        position: {lat: 34.66877073047632,  lng: 135.4309977965129
        },
        map,
        title: "Hello World!",
        animation: google.maps.Animation.DROP,
        icon: {

            url: 'questionblock.png',
            scaledSize: new google.maps.Size(50, 50)

    }
    });

    const marker = new google.maps.Marker({ 

        position: {lat: 34.668165497406335,  lng: 135.43089158646023},
        map,
        title: "Hello World!",
        icon: {

            url: 'castle.png',
            scaledSize: new google.maps.Size(80, 80)

    },
       
                        
    });

    const infoWindow = new google.maps.InfoWindow({ content: "Bowser's Castle!", });
    marker.addListener("click", () => { infoWindow.open(map, marker); });

     
    new google.maps.Marker({ 

        position: {lat: 34.667731049903274,  lng: 135.42981463239036}, 
        map,
        title: "Hello World!",
        animation: google.maps.Animation.DROP,
        icon: {

            url: 'Retro-Coin-icon.png',
            scaledSize: new google.maps.Size(50, 50)

    }
    });
     
    
     
     new google.maps.Marker({ 

        position: {lat: 34.66886347902951,  lng: 135.42930531025905}, 
        map,
        title: "Hello World!",
        icon: {

            url: 'Pipe4.png',
            scaledSize: new google.maps.Size(50, 50)

    }
    });


    
    new google.maps.Marker({ 

        position: {lat: 34.66787960094463,  lng: 135.43019312139634}, 
        map,
        title: "Hello World!",
        
        icon: {

            url: 'Pipe4.png',
            scaledSize: new google.maps.Size(50, 50)

    }
    });



    new google.maps.Marker({ 

        position: {lat: 34.6674494263618,  lng: 135.43106215707147}, 
        map,
        title: "Hello World!",
        
        icon: {

            url: 'Pipe4.png',
            scaledSize: new google.maps.Size(50, 50)

    }
    });


     
    new google.maps.Marker({

        position: {lat: 34.66796342957762,  lng: 135.43122308960392},
        map,
        title: 'Hello World!',
        animation: google.maps.Animation.DROP,
        icon: {

            url: 'questionblock.png',
            scaledSize: new google.maps.Size(50, 50)

        }

    })


    new google.maps.Marker({
        
        position: {lat: 34.66798548973011,  lng: 135.4296915483369},  
        map,
        title: 'Hello World!',
        animation: google.maps.Animation.BOUNCE,
        icon: {

            url: 'retro_mario_2.png',
            scaledSize: new google.maps.Size(50, 50)

        }

    })

}



