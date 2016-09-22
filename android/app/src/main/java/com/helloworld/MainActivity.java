package com.helloworld;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class MainActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
    }

    public void helloworld(View v){
        startActivity(new Intent(this,RNDemoActivity.class));
    }
    public void blankdemo(View v){
        startActivity(new Intent(this,BlinkDemoActivity.class));
    }
    public void flexlayout(View v){
        startActivity(new Intent(this,FlexLayoutDemo.class));
    }
    public void hotupdate(View v){
        startActivity(new Intent(this,HotUpdateDemo.class));
    }
    public void hotreloading(View v){
        startActivity(new Intent(this,HotReloadingDemo.class));
    }
    public void extensiondemo(View v){
        startActivity(new Intent(this,ExtensionModuleDemo.class));
    }


}
