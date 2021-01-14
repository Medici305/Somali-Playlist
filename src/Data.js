import { v4 as uuidv4 } from "uuid";

function somaliPlaylist() {
    return [
        {
            name: "Markan da'da jiray",
            cover: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEVyydr///9jw9Zwydn//v////38/v3J6fHq9/nQ7fLT7fJtx9lyydv///y95e+F0N97zN3x+fyx4ejl9Peh2+aV1+OO0uDG6e15zNmAzN6m3uiY1OKb2eJwytel2+aP0uHA5+3R8PHn9fmE0ty14ubU7Pa4or+NAAAC7klEQVR4nO3cS4/iOBSGYRvHJsEmdkicC6Qopnrm///FcZouqE3vqoV0+n0WxGLlT8e3IGGlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPvlXd+BPMUoF71NaZuW9Mm/h1R36dkaZ+XIeLuM6DDl4eQFVeIvjJc8phhjHMRpjXt2jb2WMN9d3E6dTPK+35rpbfpSRGgQV0qg55zUeauestlb3+3b05u3V3fpO5r1kbA+9ttrZymnr+lHUXPRxjEvsj7brOlcC6qqyrayEZQ76acpT0zT9sSoJj1X97uUsNkGNKvpb3+Sh7mpd6TId637Yvbpf38fHOKe1s7qrP7qDs/ZoXXe6yilhSajSrtGFLctpPFV9bfvLLGi3KDWM6h+9DU7XTyZ+zNd6GLOSU0Qfgwpr3bvNulM5xGtcr4JWGr/k9COk3b5shbeYYprHdtoPghIGc4hzmP3F6S4mk9KcUh4vkt6jdufy0hRDdlU3ZB+XeTFLjJISqnksi82yOn1rr3NM4zyfJW0WRYgphaR6PS7laRYThlFUCcup5lJeC5fbVI6nZXzGmGWN0e39UI3lXON3aQ6liGXQygq4RVQq5lxOb0uKY85JWsDCBDPn4ZLHPKyjsJ8wHoL3ZS9MwYj6/eKLe+G8EnQcBQAAAAAAAAAAAAAAAAAAAAAAwF8q7H5LxsURIfx7ejrn06nNW2stjVXEX9h82m4a2JTnsWvKo6m1dgdn9UHExRE+2KNzzt5D1lOl9b62tmuc042MhElbXd2VGu7dllC7klBLSRgOX0w3gQlV3T8dHjXcC0qotzXml266J7QlYSUxof2ch6ISpvte8dPxs4aSRmkIt/bp1Gp5K02ylXt4zkNJCbV1j2FaEjq9/7BbDbd5KOF/3WWlOdrnSjPp+6mtJDzq/2TUMPRfdvzmVD5O+9JoS6MVkXC7auB3lIi3p8/LFH61n18YIyTfT4+iPeO9uEcAAAAAAAAAAHH+B7N1KQCiWwyvAAAAAElFTkSuQmCC",
            artist: "Hassan Aden Samatar",
            audio: "https://somali-music.com/uploads/tracks/3933.mp3",
            color: ["#72C9DA", "#FFFFFF"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "Cishqi",
            cover:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABNVBMVEXPGyf////8///NABf++P/PGyj4///3/fv1//j7+v/25+Pqtrr6/P7PAA/onJXomqLroqTpmJj59u/srLTKAA/THCPQGiztxcDdACPtqKnEAADIHCXIGyzz///IICnhHDHBABS+AB3VACTCJCm+Jyz+xbbxtqXTZGPbABbdwabblIfXLjfObWPyvq7Bb2HBJhzgXWbrtq3faGvftaTSenbToZi0GRzJU1f6uLDNMjrNR07dj4zg0bXmpJ6tKzLkEirBMUTrjIzuzbX/ytHTNFHei5P10sfHZmP5r6K/LjnMTEr318XeAAD2yrHPYljnAB348Nrs1M7PODHFV2Hk17fm47fggnjhREXty87Qm5XVFjfMiYKqAADqdG29KDXthITn1cz15tnjrrr94+bgur37mqbjc4ZJK3blAAAD70lEQVR4nO3cbVPaWBgG4CTHhBcJL8oJkAMhHFuNqBUQ0USyVmxxlXQt3a6ytl1dX/b//4RNHOju7KedKUzGM/cFM0y+3c88nPPkfEgkCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABABFbdbnC2psadY2Fe8Wr29fqGI26FZXWzubW984bHHWRhdlttm0idPSfuIIui6t19h/YODu24kywMd197l+bRUUMKV6KIi1Gl9nbfL7V/Oo47ycIQ4mx1vbKjxx1kUcjbk81Bf9BvulzAP6lFGX9zuu8Z3Hj3fnjSoIzGHWnOVEa9YY9QlduU2Du35Z5wi9HgO2eOQ5lRtcLVOHCPe3EnmjNqXf3MzqWwQkulr0jTL7K4I81RtKnwi9F58PCW09Dah10++uVSnL1GJWXb3B6dk8rHb0SlFl17GBc/DX91etSIO9ucGOz2847Lm3vdbJEzg7qTI7/h/XblclHaWD079Izr9XWj0yTlnkHXJkG7wqXsaGM37mhzcrz1YTDod23n9ysSTUZ7YtrZUfem8kUXpImM8eutQA++Tt45um7Tr/63IPhjf8dviDITKWfOWXaz/fSx/3nvpNNqdVYKJ7euHm47cUebF07dQeeiNdlw6q3mevvQzx192T90iSTKYd+g1NsLCLnoVzZ2HdPUdUd3gvYZZfW4o81JvUfdsWcHZnCRXpm0r651YuqfRgeXvWrc0eZFlai3Oh4Px8PScuXILw3Hd+PHAyLIRjpFdEIpKeoRU3cocQQrMBoZUrRzUklVww2GheJONGeqUef1asSISIYhWgvVqGvhuUKKDheSaP0DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEEn0JBedYdy4YZJUvaGWYRjMUoV4Hj8szJiJnngKry3p+dGnqOS40/04plIuFWdI2SZlwu1y+OGEl0k57nw/LuwU2yrNTEqlSj787U5OS+3caemuS+IOOA+sJc8kk3L6UVHknKYo6XtZU3Ivv0JVkuyWok1lUkthYQmtICdTK6uKJmeFqJC2ZGVGVtLLglUYjgN6kZvJ5/LZiiJWhVEPPTkxJacSf4rWQ4sz7imzCpOJpIgVkpa8NJUScKd57mH6X+4E7CH1lr9bXfZXBauQPU+LmVSqlr7PZJIFJZNYWVYyNQEqDA8W4cTPzCzVHu5rqeR7LaWl75eWMoWXX2E9PD79M/E1WXt4rGXCuzYtvH3TajX/5VcYTXy3kp/y87nb2/2nfCfvPxX+yudzrZf/GiXVYvWq/p3p6I7t6CSwnSIxTfLyW/gfqhp+o3eaqNMrAAAAAAAAAAAAAAD4//4GJvd5iJS3xm4AAAAASUVORK5CYII=",
            artist: "Ali iyo Awrala",
            audio: "https://somali-music.com/uploads/tracks/1128.mp3",
            color: ["#CF1B27", "#FFFFFF"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Dhafar Dun Xariira",
            cover: "data:image/png;base64,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",
            artist: "Fuad Omar",
            audio: "https://somali-music.com/uploads/tracks/2001.mp3",
            color: ["#02843E", "#FFFFFF"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Jacalylkeenaa Ka Wayn",
            cover:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAvVBMVEXz4gzz4wr//v/z4g7z4AD+//v38aH7///v75/+//T69b3y8bD+//77//v+/PHz8pn/+fr5+dzx8JPw5AD49MD++vbt5QD9/u3375Tz3gDx51X388L03Rru5Bz06nPw5j77+dX162z18qr99M799t31/+vw7Yj0+sv3+NXy8qnr61Xr7Ury40v63gD46Xn1//bz737w4y3q5Srq7Gru50nx4Sbv6F/140Xy7XL/+P/s7YPx41b6+uPx743476Xlkv/eAAADKElEQVR4nO3ca2/aSBQGYJ+5eGJ3BuwMxrHB5pbQhIakYdk0m034/z9rB1UhtJt+K3J19D4SEuLTeTV45ozlcRQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8EYhIdl3DCUkp1VjxThg17cR3XcZJqaktJ9R1FSdDfqhsz85UxDUjtYt07hbhOuSa0F9e2WWjFNN8kmRTJO66GvsqYjnZSKKZ+TzNJrJuPMsFg9RwZ66f7c1UtBXLMSTlFy5bJULPG54JpZcvVsfz6Rfar/wc+dvElnrl1xXTgJG/c0bb+9aTZBixUnJMo6tslTvxNZIMV3yqlPfTq0s/md5nTdfVnMJ4slyUQvQrVfd6D11XcwK0dc6YcnRLtBVFw7AvpUmvjJ82XkmqLcsxjNa+qlRouaWqbcIy4VAOAx9609rYJmwUiaTfY7NuqIciK4pe2Suim2XUkMx7eVEU2SObnZTa6MQ5K1wpFW3mq3FRFs45sVqPuy7tN/Gq3tb1dqlLufuybO42ZfFXHdCYTw8ephlSjzapbny8Xf9dmm34gctf9ID2CS/k5o72CdnFi74nXA/HofXmmlA9irJSVYja5OYbx4S0sjodDEaB4JkwzDSFMSYsE7awtywTPsQX38WvMdN7++pd16WcBh3rupiT4J8QAAAAAAAAAAAAAAAAAAAAAAAAAAAAOCD61ePPXE4f/vxMtzzg8rQ3qf97O5fAIiKpOj0SLwdp+hQ+u4t0NHjicO6Cqpm27/KREebsH2Nfwhd7ziXhkWlqEtcvkiRPEyYJPbXiyPXIaNHPnH4ZOWFfOSSU8tv52UH/ObXC7hPmA2ftOYuZZtiK5EBMw9AZXgkjmiXmQOSjhFtCWc3c+0TjrvmNoR8+Fr2DbMEvoaz+/fTu7Dlll9Cr1tq3tcKG69AJHWfa5qnWXBL+2NMMnLg/E2EMU6ftksNbI2h93NOErs0K3c+0ftkvjK8cxpDUZB4f7JZtvOvXuzi+aOP5ruaQMKLog+0Tp92T/OH1bPSz7gr7feiDXG/xuNzHAAAAAAAAAAAAAIA/wX8z9zoj4kC4rQAAAABJRU5ErkJggg==",
            artist: "Abdallah Yusuf Hanuniye",
            audio: "https://somali-music.com/uploads/tracks/3689.mp3",
            color: ["#F3E20C", "#FFFFFF"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Marwo Ruun",
            cover:
                "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgWFQkTGBYPFRcUDRUPEA0SIBkiFiAdHx8kKCgnJCYmJx8fLTItJSotLjouFyszOD8sNygtLisBCgoKDg0OFQ8QFSslFRktKy0yKysrLS0rLTc4NysrKysrLTcrOC0rKzcrKysrNysrKy0tLSs3NzcrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAbAAEAAgIDAAAAAAAAAAAAAAAABAYBBQIDB//EADEQAQABAwMCAwQKAwAAAAAAAAABAgMRBBIhMVEFQWETMnGBBiIjM1ORkrHR4RQWNf/EABkBAQADAQEAAAAAAAAAAAAAAAABAgQDBf/EAB0RAQACAwEAAwAAAAAAAAAAAAABEQISMQMEE0H/2gAMAwEAAhEDEQA/ANoAyPdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASbWkiu1TcvX6aIqzFO7d9fHnxHEespiL4iZiOow740t2rVTppjF2JmJzPFOOszPbHOWb2lii17Wzeiu3ExTMxFVO2ccZiY6T3KRtHEcBCwAAAAAAAAAAAAAAAAAAAAtNem8Oq8GtXb9yiJ9jER+Lv8pic9M54x1VZJtaumm1TbvWKa4pzNOZqjZny4nmM+SYmuuPrhOVVLceF0WbniM0aiYzOnpid3uxViOvyw6/E7Wls3tVRpaomn2Mb9nue03xjEeXwamNVdjVTqZnNyZmZzHFWeJjHbHGHK9qYrtTas2Yot53TETVO6YjjMzPSOy1xVK/XO0TaMAo0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGY7gBmO5mBFgAkAAAAAAAAAAAAAAAAAAAByt+/R8Y/d6fFr6v3NH5/08vpnFUT81p/22zj/mx+uP4dMJj9ZPk4ZZa6wsdVqmZvbrVOdkTxET39Gb1m3i99nHudo9VZn6WUfabdBjdG3i5HHXnp6s3PpfFUVx/hTzG37zp156eq+8M0ePrfFWjpHyCOIwOD1IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q==",
            artist: "Abdulahi Boqol",
            audio: "https://somali-music.com/uploads/tracks/3435.mp3",
            color: ["#C9827E", "#FFFFFF"],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Caashaq Dardaaran',
            cover: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAArlBMVEUjlfj///////3///wjlff///oAi/j///gIj/YAjviVxPuv1Pq01vz8/fsYkvijz/nu9v3q+P2p0vtqsfgAifiYx/nG3fhIova/3fv2+/2Lv/jv9/rn8/xIoflztfm62fuCu/xpr/rh7vx3tPOTwPBosvOCu/AAiPJbp/YklfIvmvJcqvGk0fN8uvXx+/jQ5fez2/jC3fTd7PCWzfrH4PfW5fTR6P6izP2Buuqx0/7qUvZxAAAEFElEQVR4nO3cfZOiNhwHcEgIP6KboAKC4p63ug/iKoi63fb9v7EGfLy79jrtbetBv58/kOCMk68JSWAGLAsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg/8n5/pf6v6rHv0g71yFN4aqov/8HNIUnvQvt6Lqoj25duQ/gePPp3dn00VsPrjx52a0r+MP0jqf9CyLK89GJoo5sfEeVKgnds/CZnl3pyWPHfUnyrPEd1eORZ1UjTE0uaKGz8wgqI974gJYW79654C0X4lWfAzoyYrep1UfS/JzQy0q2otdMx2ZIrQ60I6Gkd8+pOqkl1zkpNQ1kISavsjpitSKhzudLaT7lsiCebsXMScgmMXTMlNiONvQ2JPLA074g1VuvBa2UErYiEXl1QtnsocbR3h2zGSNzBtq1DRUT0euTUGzy6uqSoqzBM6L2rMdyZttqRJ2tOCTcdktKM9dPmRJs8yjehNg/SK+RGR2d7UbM71e5WGemqra0lTL9s1hNuwWR4rRdy3g1EqnfzIRyQinFiemQQuzelLKZqvZNiZ0I33PCQs2okLeu7t/naMfUe0v3byRoVz6TacMiKZNpmQxP9vtdJld8Hud9769/8afjyB35Mn8rB4+xKS0LQXkQ7mkvtVmXHkSUr0U3pm3czBHVnSrLF4w450LwbWI2ZcGJquIBmfall6SvdSNPREvf03jJup/Xnyvjp/mIqCj98bV1Ogxp0Myx1PTMl8nwJY9CWV84STfMzDmZBseya3qp62oaxyJo7N0MWfwSpnkvrfV6vbRISNGq35tcsIc1X966ov+YaxL2Z8nF0B9THpXDizdxP0gbe7vGcYvipeeHblhd5ZtNNXyaa4z6Yj8Mq5I7J72fNHGqqDmymMXpJl4sFvHX7g+ySGSTorEJtV4JJg5LGM7NxizfWL0CP2zt6ihxWjd0rqjFwUPwYARXPn1pHjd1rjg63PY93f7Vf+DWNfxRjuN81UQm0/HQN18BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANxOC57o+hOnR7na9VCXlle8qlS/s63eaUVOvbh61jkZRMOkXJud6WOyH85vXbkPoT9d3vXBxSzhXPiC8VFCiketOBt1wNUhn21ze5ZUrzQxB3obJlinsQ85X9MBo8v7WiaJbdt1wikTdqcdbRiv3t/9k/G+hQkDoS5vSpy1rw0d00u5fcTsliZkrU5o6Seh1DGh+rKXsnYktOLuZaDxO8P2JdRPjJ9nCzrMFrZJeNeeXhpw001PZolQ3FeK9zZmIdCWhILscyNOzJqG+yTEaGOWb1Er1jTWYrrqnvnjbvduXu38+lt3Gty6bh9De9d0feF02rl13QAAAAAAAAAAAAAA4CfyOxg3Wap7t8W3AAAAAElFTkSuQmCC',
            artist: 'Lafoole',
            audio: 'https://somali-music.com/uploads/tracks/1338.mp3',
            color: ["#2395F8", "#FFFFFF"],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Filsan',
            cover: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAApVBMVEVXJR7///9QFw1GAAD9//+tnpv///7Wz8zo6unOwcBJAADp5+WXgn5PFAmkkYtSFxTe2NY+AABVIBhSGxNPDwDWz9AyAABXIhxWJhyQeHVYFxOLd26/s61SHRinlpHy7eyciIhfMi+1pqR4Uk5pQj1uS0WAY19UDgNXLCW5sa/l39unlJT29vJOBwWQeneDbGKNcG4nAACdgoDZ1tHRx8R0VFB2UEpX8OPCAAACv0lEQVR4nO3cYW+iMBzHcSqlDBBFwYl3KMwpmw43b3P3/l/aFXWotweXS1y49L6fbU2zB6a//EsBk9ayAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gvpOLHGbQ/iS337nvmheRHTaTI8dsOZyIuOH3aGWhwmftLqyK4lnGV3frgPmcyFNnIm94vFsizmb5kRER8codzu48DfJH6RR6vtWjSewrZHdwVpMtuHyd1s7jhO5vaCU8L74Z8/4J+XJr06i1JN3fImYLVpe3RX0e+KC13ZdHd+24O7iv7zZcJSncKacBlaVudFyGiVN5WzR0JIbzvX/5iacBla1nApolvfrpSqer1A5nUNq4E98IRrxiTVS42oXpbLSoliYC+EO6qrGTnPueh22h7bldiiziSVDGaFJ5xmvqq47ZFdix1JpaSof/Rvt1loMkMmqWVtPNGkkupJN4cqLsxYZ6z98/bpBjFyxfpwy/eMKWG9mKpD3XQz2/m3t6WetOrRmBJalp+L+b5ulayKbrabLwohZka8Vhwljoh+bJ9eF4HIDo/dK/FmzhzVxtNKenf+MhLi8XhFBlOzXvX75XGdefUPD6m7ODbsC5vwvZ6d6nWTJsv5blXaZsXTxrFdFhPrYTy24sTf9NO2B/QV4rBjXOEAAAAAAAAAAAAAAAAAAAAAAMDXiO0z/kY34UfHjG2y/W0enOy8PLjpVcHNW5YHuRk7gfuT8934a1c3jhAy93SnZ8SG/IsTB6ROKKUjlLyp984akvBTDWVdQ3MSptP3+kyTD91DDU1K+LmG5iV8FurEyISmX4dWv1xHJ5l5CdNpGbmNkYEJfzuBZz0yMqFs1CuNMu6Of1HDoH5qq49ty3e6mRmRcLzontmWuvmp/ya6UyzNOBtj2DkTx7oZNp22xwYAAAAAAAAAAAD8hV895C0THpQwewAAAABJRU5ErkJggg==',
            artist: 'Abdirahman Xanateye',
            audio: 'https://somali-music.com/uploads/tracks/8cf83a12c6b45d0615648bec3c86a4fd.mp3',
            color: ["#57251E", "#FFFFFF"],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Deeqa',
            cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLcAcorU5oxHXfwNbsgfcW3qxjXiLMRcHYA&usqp=CAU',
            artist: 'Mahamed Tubeec',
            audio: 'https://somali-music.com/uploads/tracks/1907.mp3',
            color: ["#8EDCA2", "#FFFFFF"],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Kal Gaca',
            cover: 'https://payload.cargocollective.com/1/5/160375/13325287/prt_200x200_1515716281_2x.JPG',
            artist: 'King Khalid',
            audio: 'https://somali-music.com/uploads/tracks/1123.mp3',
            color: ["#22173F", "#FFFFFF"],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Ruun Warsan',
            cover: 'https://e.snmc.io/i/600/w/e9e4be0c5ae345776be4ff9c7fd43d6e/7371924',
            artist: 'Yusuf Dheree',
            audio: 'https://somali-music.com/uploads/tracks/3260.mp3',
            color: ["#E0D3C3", "#FFFFFF"],
            id: uuidv4(),
            active: false,
        },
    ];
}

export default somaliPlaylist;
