<html>
    <script>
        const list = [5,8,9,2,7,6,3,1,4];

        function callback(list) {
            const newList = [];
            for(let i = 0; i < list.length; i++) {
                if(list[i]<5) {
                    newList.push(list[i]);
                }
            }
            return newList;
        }

        function filter(list,callback) {
                return callback(list);
        }

        const filtered = filter(list, callback);
        console.log(filtered);
    </script>
</html>