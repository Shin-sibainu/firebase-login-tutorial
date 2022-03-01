import React, { useEffect } from "react";

import { auth, db, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  setDoc,
  writeBatch,
} from "firebase/firestore";

import { useAuthContext } from "../context/AuthContext";

function Home() {
  // const [user] = useAuthState(auth);
  //useAuthContext()で監視してみる。
  const { user } = useAuthContext();

  return (
    <>
      {user ? (
        <>
          <UserInfo user={user} />
          <SignOutButton />
          <GamePlayButton user={user} />
        </>
      ) : (
        <SignInButton />
      )}
    </>
  );
}

export default Home;

//グーグルボタンでサインイン
function SignInButton() {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
    //この後にusers→uid→scoreをfirestoreで格納しないといけない。これが分からん。
  };

  return (
    <button onClick={signInWithGoogle}>
      <p>グーグルでサインイン</p>
    </button>
  );
}

//グーグルでサインアウト
function SignOutButton() {
  return (
    <button onClick={() => auth.signOut()}>
      <p>サインアウト</p>
    </button>
  );
}

function UserInfo({ user }) {
  // //ここで登録できるじゃん？
  //score情報の保存はゲームプレイした後で良い。だから今はこのコレクションは必要ない。なぜならuserの中にdisplayNameの情報はあるから。名前はある。
  // useEffect(async () => {
  //   console.log("userinfo");
  //   // グローバルに管理できるユーザーが欲しい。
  //   if (user) {
  //     await addDoc(collection(db, "users"), {
  //       displayName: "testUser",
  //       photoURL: "testURL",
  //       score: 1000,
  //     });
  //   }
  // }, []);
  return (
    <div className="userInfo">
      <img src={user.photoURL}></img>
      <p>{user.displayName}</p>
    </div>
  );
}

function GamePlayButton({ user }) {
  const scoreAdd = async () => {
    // console.log("a");
    //firestoreの中にすでにuidが存在するならもうデータ追加しなくていい。
    //firestoreのuidを確認する。
    if (user) {
      const uidRef = doc(db, "users", "uid");
      const uidSnap = await getDoc(uidRef);
    }
    //ここでdisplayNameとscoreを保存(更新)する。
    if (user) {
      // await addDoc(collection(db, "users"), {
      //   displayName: user.displayName,
      //   photoURL: user.photoURL,
      //   uid: user.uid,
      //   score: 1000,
      // });
    }
  };
  return (
    <div>
      <button
        onClick={() => {
          scoreAdd();
        }}
      >
        <p>ゲームプレイ(スコア保存)</p>
      </button>
    </div>
  );
}
