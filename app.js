const cardContent =  
    [
        {
        id: 0,
        title: "newTitle",
        price: 205,
        description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        image_url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAxQMBEQACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAABAgYHAAQFAwj/xAA8EAABAwMCAwUFBQYHAQAAAAABAAIDBAURBiESMUEHE1FhcSIygZGxFCNCYqEVU8HC0fAmNFJzkqLhJP/EABsBAAIDAQEBAAAAAAAAAAAAAAECAAMEBQYH/8QAMREAAgIBAwMCBQIFBQAAAAAAAAECEQMEITEFEkEyURMiYXGRI7EUQqHw8TNSgdHh/9oADAMBAAIRAxEAPwCxgvmyR22OE6QowViQBgnSAMEyAFOgBCYAQmRAogMUIYpRDFCGKUQCgTClaIBKEUpGFCpKCKUrCKUjQUKVU0MeblVJIZCFZ5JjoQpQoQjdEY3Qt6M4wViQowTgHHJOgBCdCsKYgQmQAhMQKNAMwoQxQgUbIAoMhiBAFBhAlZBSlaGQpSBFKRhFKRhQqrYwjlW0ERyokh0eZCpGQpRCbgXQRQOFYhRgnSAEJ0AYJ0KxkSBTIBgTECAiAKagGKEMKjCBAgCQ0EkgAdfBQhoT3q1wOLZrhStcOY70JlhyS9MW/wDgHcjxGorK44FzpfjIAo9Nm/2P8MinH3Nunq6aqGaaoil/23gqiUZR2aHTR6lVhAUjGFKVkEKqY4rlWwnm5UzQyEKoY4p3QCbYXSRQOE6FCFYgDBMAYJ0KxgmQApiBRAYmIFQhiYB51M8NLA6eplZFEwZc95wAjGPc6W7A3RANR9o0NNxR2/gjHSaYZe7zbHzx5uwuph6X5zOvp5KXm9ivrnrGprpSZ5Z6nP752W/Bnuj5Lpww4MXoiilyk+WaI1HWDaJhaPLYforfixF7Weseq69p9qIOHmp8ZE7WbcGqaWR7ftVJ3ThykjGC34jdFuE1TQd0Suy6srGNa6iuP2yEc6eqOSB5O976rBn6Vp8u8flf04/BZHNOPJNbJqOjux7n2qerAyYJSAT5tPJw9Pjhef1ehy6b1Lb3NePLGfB2D1WBlqEKRoZCuVUhjzcqZoZCFZ5DioENsLpIpGCsQowTIAwToAwViFGCZACmRApgGIogVCGvcK2CgpXVFQ4ho2DW7ue7o0DxKsx4pZZKEVuLKSStlT6g1NX32rkiopO7gicWunYcti8Wxnq7oX/BuOa7X6OgilHeb/vYzxUszvwQ9trjdKe7Y95J6bk+pVT1Mq3ZasS4OjSaYuNT/lraT5vWeeuxR9Uh1hfsdSPQN+eM8MEXlwhUvqOFcJsb4L+gJNAX9jSR9nk8iAEV1LD5i0T4Mvc5Ffpu50YJq7W7h6vi3WjHrMM/TP8AIksUlyjiupXwv72je5rmncDII9Qt+PUNeooljO1aNQNmcymumWvB+7naeEtd0ORyK2XHJFxaKXcXaLP0xqJ80kdtusgfUuB+z1GwFQBvg42D8dOvMLzPU+m/w/6mP0fsbcObu2fJJyuIzUhSq2MeblTJDIQrOxxUpDaC6KKWOFYhRgnQBgVYAYJkBhCdACmAFGyBTIAOQJ5Y3QIVjqe6SagvLKCmqDHTFpMkgOBFDvl2f9T8H0bjlxb9uLj0/T/Eaucv7/yZlF5p0uEe1h0vHXFp7sxW6M4ij5F46Z8lxM2pnOTr1Pl+xvUFFE1pLHQUwHd00YI8lT8JveTsDyPwdBsTGbNaAnjjjHhCOTYcDCNIFgwhSCJJEyQYcwEKuUExlJkU1JoqguQdNTNFNVY9mRm3zHVPi1GXA6TuPsFqM+eSp79YqmhqXwVcRjmHuuAw1/ou7pdXGce6P+DLkxUetguxI/Ztc9zTnME2cFjgcgg+IwuunHLHtlwzI7i9i39KXh12txFTwitpz3dQBsCejh5Eb/NeM6jpHpczj48fY6eHJ3xs7BK5rLhHKmXAyPMrM0OLlAJtBdFFAwKsQKGCdCjBOmAZOgDBMmAITACiQwJkQj+uLoLfZjEHFr6p3dZHvcP48eeNh5lbtBiWTMnL0x3ZTlbS2Irpyxvq5iZ2AAv7yfHV3RvoBgfBY9bq5ZsrkuXx9EasONY40yxaeBkMYY0YACqx4+xCyk5M9lYIBAIOSBAFKwgKDCKUrIjkagslNeKN0M7fa5tcObT4quM5Ypd8B+dmUpqOyVFvq5I5GkSxnIcBjiHQhej0esjOKkjJmxUzt6G1AYrzSPldguH2aqB2BaT7D/g4gejld1TCs+lclzHf/v8AoVYJOGT7lukrxbOmKVVIc83LO2hkKlCbQW9FA4ViAEKxCjIog4ViAHKYAQnQochGyBymTIV1qyV9y13S0A3ho6cSOHQvJzg/Ji2LJ8LQzkuZOhYx7sq+m5NbTRilpmsxvzcR1K5eKN/My/JI6A9Fp8FJhUCYoQBSkAUrCKUoQFKwinzSBI5q6xMu9ESwAVDN2O8fJDDneCd+HyM0pKipX200NbTPc3gfJI6Mg/hJBwfgQCvV6HPHLPs5TRz88O1WXTaawV9qo6tp2ngZJ8wCvGZ8bxZJY3ym1+DowfdFS9zZcszLDzKoYyFQGNoLeigcKxAGCdCjBOgDJkAKcgUwoUwDCcAoN0iFb2iZtX2i3Bz/AMTTg+PDhaMsXLRR+4Yusj+wt87QZxcXU9kkhjpozwd+5nGZnDmQOjemeq1YdElH5uf2KpT3InX1tfU1VbUS1c754pT94HFuPQZ2C6kNNBwXylLnUizeza8TXjTodVSGSenldG5xO5A3GVxdViWLK0i+DuJKsrM2OBKEGULIKSlbGFKrCKUrCKRnmq5KwlbdolCY5G1EbfY7+Fx6blwC7HQpXm7fYo1auBJtGyE6epBjZhkYB5NkcB+gXM6sq12RL3v8l2n/ANGP2O0VzJbF4hVTQyFQGNoLamZxgU6AOFYgBBTpgHCdACmsAUwAogPCsk4KeR2cYYfokyPYaK3KHvNZV0dXcqqlJaTAYjIOgflpI8916bRaeOTTxvxv+DHmnU9jnaOpxdtRW+3v2ZI1zRjphjnfyro44LutmeUnRLv2ELVeb5ai/vWxhr2uI3w5jXD6p+1J0gXZ3OxqQtp7zTn8FS0j4tXn+qxUckTZg9JY2VyrLzFCAKVhFKRhFKRhFSsKMShIH2luJo4Ydw100bsg9Q5dHokb1VlWqf6R0dDH/DtEc++wy/8AMl38ywdWl3a7I/r+xdp1+jH7EgJXMk7LkhCqxhVAmyCtSZTQ7SrY7iscKxMAQmTAxk6AHKZAGBTgCEQGhd38NFL5tIVWV7UWwRUF1Y19mvDTjiNK8j1a9jvoSvY9Nd6dI5mp2mRfRtaKHUtpqicBk2D6EFv8VshyUSVk3vF3ZPruaeI+xUUEPF5kNIP0TPaRIm72TTcOoL5Tg7Fkbx8yFwesquyX3NemfKLRyuIzWHKHggCUGQR72taXOIa1oySTsAl52CVrqbtIfT1Jhs0Ub42uwZpBnj9B4LrabpffHuyGeeenSJLo3VMOpqFz+ARVUJAmjB235EeRXP1uklpp14ZdiyKaJDnCwtlpW/ahUEzUlJGfvXn2QPE7A/rn4Ls9CXZKeZ8JGbV7pRXkk+nWCKghjaAGtYAMLz+qbllbZviqjR1iVlbGFShFKJDZCvTKhwrYsUYFWJ7AGBTpgYwKcUKZMgQmTAFEBy767ho3HwCpnu0Ww4KU1fO+lM8TSQ2QPb6gj/xes6Xk/To52qj8xDqaQsdG8c2vBHzXTRnOvS1cgubJ3OPtN8eil27ITPspq862rGDYS0h+bXD+q5HWY/oqXs/3NGm9TLlBXnrNoSdlGAVzsDJIAG5J6IO/ASu9TX92oJZrdbZCy2QH/wCmpBx3xHRvku90/pzVZMhkzZvCKyvk8UlQYKPPCzmcdF23xSMh6aW1DWWS6RSUkhYziAlZk8MjSd+IdT4FYdbpoZoNMvwzcWfQskrGQ9693CwN4iTyAXimm9lydIpuauOpNWz3Fn+Up3d1T5/Gcbu/vxXo3D+E0axfzPdmWL+Lm7vC4LOtTOCmYD4YXkszuZ0VwbxVLCLyQCKUSGwFZFlY4Vy4AMEyEGBViIME6FGTJkDlNYA5RsByr77VFIPyquT+ZFseCmNawOqIYpWe8Dwn16r0XTZ9lpmLURvch0dO80ne42yV2HkSn2mTt2s9aeThc1/PGRz/AL8U9ikv7JpCdcxkcnwSj9Af4Lm9W30z+6NGm9ZfAK8xZuMJJ5I2ArLX+rHVlY/T1qmIja7hrZ2HGfyA/X5eK73Ten8Zci+yMmbN/KiNy1E9W+n09YY2maX2Sc4a1v4nOPQAbkrvL6GRj6uNo0/ZYbTbeCaX3n1Bb7dQ/q89Q0cmhM/lW4ltsgVDxTVsUeQ3vJGtc48gCdys8/S2Wx5LF1jq6fUMxslie5tA0hs9QNjMB0H5fr9eLpNDDSR+Nm3l4Xt/6apZXkfbHg2tN0UUckMEDcRQ7ep6lYNbmlJOUnuzVhgo7IsWlbwRgeS83N7mw9ikAISoEXKJDZBTREoYFW2AcFWIUYFOmAIKdAGTWAOU1gMRAaV0Zx0zx5KqZbEp/U0UscsrGe645wu9opxcU2Zcq3ojsP3UZhmb90f+q6Mn3O1yZ68GvJBTPjjjhOHN4uIkYznGFask1uxXFE+7KbM2K5yXDiB7uMsb6nmuP1PUtxWM1afHW5bDSuQrLmQ/tJ1Q6w2r7NQycNxqwRG790z8T/4DzPkun07SLNk7pelf1M+efaqRSUNZ3EbnAnicTvncn1Xqlsjnm/Z7x+x4J53d2+oqA5pa5ocSMcnfl3ztjfB3RUmuArt8nCqJp62qMkhdLNIQABuT4Af0QbsVbHXltYtwFI4iS5O3mxu2lB/D5vxz8OXPKE5Rxq2GKcnsde3U7KGNsUQPfPHtHwC4ubI8rcnwboR7eCf6Yo+7ja4jfC89rstujdjiSxgwFyWXBKBBSVCCEokNkFRbAHaVZFpitDAqxCjBMgUMCrECg5RsAwKewBymslHjUND2EeSRjIhV7sv2iYkN5q7DqHjJKFkQulkdESOErq4NUpGeWOjiG1v49mHmty1CopcCzez6kNJSkEY4ivP67J35bNmKNRJs07Kiw0Uh2oR1T9T1klRxEENbF4CMDbHzJ+JXpemZIfBUUYc8XZCXwFg4pcgY4g3q7ddaMkzK4mtNxEAuyB0ynTsFG/ZZJoJ++pRipAwyUjPdeJHn4eCEsigrZFFydHbp2Mo2cTvamdvg7kk9SuZlnLK/oaoRUEdqw0jp5xJJuSckrn6rKoxpGjHGyyLXAI4mjGF5rPPuZtijprOMKSgQUlFAEymCbIKrIMCniAYFWJi0OCnTAHKssAcqAoYHdOgUHOU1gAVOQng+FpzkJHEazm1trjmzloUi3DgLpnJdp+MPyB1Vy1EhexHdtdGKVgaFU227Yx0HHDMovYSipu0Z0lRXZ5howF2elUomfUJshcs4neHSwjj5ZHJdlRceGZXuazqT7VMXPc1gAw0dB5q2OTsjtuI42zbhfFSDu6QcTv8AWRzVM+6buXA8aiqRu26kknm4nEklZ8uRRjSLYRssCwUAja0kLz+rzXZsxxJZCOFgXJluy89CUgRSUaAKSjRBco0Q2AVWEIKhBwUwBgVYhWOCrEwBCKIEFOmAOUbBRmUUyUHKlkoUjKgRSwHohQQgYUAB/uFB8ERBtVWozuLw05WzR5+zYryQsgtTbHRuPs4XchnTMrgc6ahdncFaY5kI4mzRW9znAcJVWXOGMSYWW18PCS3dcfU6izVjgTCjg7po2XHyTtmhI3RsFQMYSgQUlGiCEpqIKXI0A98qsIwKBBw5Eg3EiiDAp0APEmTAMHJ7IEOTc8gMyhZA5RRDOJGwByomEBKjZBSULIadVTiUEkZSNtMJwqy0RvJPCN1ohqZRFcEzj1dhbnLWrXj1jK3jQ1FaQx3JDJqbJGFEgo6URtXPyZLLkjfaMABUMI2UAilylEFLk1AEc5GiCFyNENgFVhGBKhBgSlIMCiQcFMiBBKdChBOUVyQbJTXuAzKL5IHKiIDJQIYSUyIZkoEASUGQV3JL4CeL2hKQ1pGg9EbIebWNB2CNsB7AY5JGEbKAQElQghJTUQQkokFJKKIxCTlMgH//2Q=="
        },
        {
        id: 1,
        title: "Ergonomic Wooden Tuna",
        price: 743,
        description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpOkTRzEXWro0WV1shDgbq-JUX6AxR3xAAHxfNgvY7N2n5w5yThldV4NqkwN_PiRUf61Y&usqp=CAU"
        },
        {
        id: 2,
        title: "Electronic Bronze Chips",
        price: 808,
        description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive ",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BxDrAI3cfbhQCg1qXBbE1WGotFIMGzbqgQ&usqp=CAU"
        },
        {
        id: 3,
        title: "Awesome Bronze Car",
        price: 382,
        description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals, a front-engine design",
        image_url: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww"
        },
        {
        id: 4,
        title: "Smart Watch",
        price: 30,
        description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        image_url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
        }
        ] 

        console.log(cardContent);

    const cards = document.getElementById("cardContainer");
    
    cardContent.map((render,index)=>{
        
        const {image_url:img, title, description:des, price} = render;
    
    console.log(render,index);
    
    cards.innerHTML += `
    
    <div class="card m-2" style="width: 20rem">
    <img
    src=${img}
    class="card-img-top"
    alt="..."
    height="230px"
    />
    <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">
    ${des}
    </p>
    <p class="card-text">Rs.<span>
    ${price}</span>
    </p>
    
    <a href="#" class="btn btn-primary")>Add to Cart</a>
    </div>
    </div>
    `    
})
