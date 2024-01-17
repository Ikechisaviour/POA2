var minerlist;
var all ;
var final;
var aaa = 4;
var bbb = 4;
var ccc = 0;
var ddd = 0;
var eee = 0;
var blockNumb;
var newAccount;
var faultyAccount;

function getFaultyAccount(){
        
        minerlist = clique.getSigners();
        all = ["0x1e67aad1b93a4ceea5d4d9a29a7e7e8f4cf7b432", "0x620e898e82895067cfa934663ba5e69dcf2ca355", "0x7b6a0bfb3f1b6d30516c863222f66bb94b8ae000", "0x851bc55336ea97fa9f52ea45c6a15e56c90815bf", "0x9e2c8a1bab82a9dd2b337f88bdca15a0702680ee"];
        final = ["0x1e67aad1b93a4ceea5d4d9a29a7e7e8f4cf7b432", "0x620e898e82895067cfa934663ba5e69dcf2ca355", "0x7b6a0bfb3f1b6d30516c863222f66bb94b8ae000", "0x851bc55336ea97fa9f52ea45c6a15e56c90815bf", "0x9e2c8a1bab82a9dd2b337f88bdca15a0702680ee"];
        
        if (ddd === 0 && minerlist.length < 4){
                for(var i = 0; i < minerlist.length; i++){
                        
                        if(clique.status().sealerActivity[minerlist[i]] === 0){
                                // z.push(0);
                                console.log(minerlist[i] + " is not mining");
                                faultyAccount = minerlist[i];
                                // aaa = 3;
                                bbb = 5;
                                ccc = 1;
                                ddd = 1;
                                eee = 1;
                                
                        }
                }
        }
     
        
        if(eth.blockNumber > blockNumb && ddd === 3){
                ddd = 0;
                console.log("PoA^2 listening continues!!! current block number is " + blockNumb);
        }

        getNewAccount();

}

function getNewAccount () {
        if (ccc === 1){
                for (var i = 0; i < minerlist.length; i++){
                        for (var j = 0; j < final.length; j++){
                                if (minerlist[i] == final[j]) {
                                        delete final[j]
                                }
                        }
                }


                for (var i = 0; i < final.length; i++){
                        if(final[i]!= undefined){
                                newAccount =final[i];
                                ccc = 2;
                        }
                };
                console.log(newAccount + " is the new account");
        }

        replaceFaultyAccount();
        
        
}

function replaceFaultyAccount () {
        if (clique.getSigners().length < bbb && ccc === 2){clique.propose(newAccount, true);
                console.log(newAccount + " is replacing");
                clique.propose(faultyAccount, false);
                console.log(faultyAccount + " is to be replaced");
                ccc = 0;
                bbb = 4;

                blockNumb = eth.blockNumber + 10;
                ddd = 3;
                console.log("wait a bit!!! current block number is " + eth.blockNumber);
        };
       

}

setInterval(getFaultyAccount, 2000);

console.log("PoA^2 running!!!")