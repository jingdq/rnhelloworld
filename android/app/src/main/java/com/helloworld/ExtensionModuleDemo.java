package com.helloworld;

import android.widget.Toast;

import com.facebook.react.ReactActivity;

/**
 * Created by jingdongqi on 16/9/14.
 */
public class ExtensionModuleDemo extends ReactActivity {
    @Override
    protected String getMainComponentName() {
        return "ExtensionModuleDemo";
    }

    public void toast() {
        Toast.makeText(this,"Hahah",Toast.LENGTH_SHORT).show();
    }
}
