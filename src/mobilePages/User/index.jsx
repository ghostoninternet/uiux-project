function User() {
    return ( 
        <div>
            <div className="bg-[url('/src/assets/beautiful-mountains-landscape.jpg')] w-[100%] h-40 bg-cover relative">
                <div className="w-[8.3rem] h-[8.3rem] rounded-[50%] absolute top-[48.5%] left-[50%] translate-x-[-50%] bg-white shadow-lg"></div>
                <div className="w-32 h-32 rounded-[50%] absolute top-[50%] left-[50%] translate-x-[-50%] bg-[url('/src/assets/jack5.png')] bg-cover"></div>
            </div>
            <div className="mt-20 flex">
                <div>@mailadomcuameomeo</div>
            </div>
        </div>
    )
}

export default User;