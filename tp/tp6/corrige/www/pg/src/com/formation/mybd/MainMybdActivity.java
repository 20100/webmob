package com.formation.mybd;

import android.os.Bundle;
//import android.app.Activity; 
import org.apache.cordova.*;

public class MainMybdActivity extends DroidGap {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");
    }
}
