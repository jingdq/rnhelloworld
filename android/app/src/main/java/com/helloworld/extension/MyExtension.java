package com.helloworld.extension;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.helloworld.ExtensionModuleDemo;

/**
 * Created by jingdongqi on 16/9/14.
 */
public class MyExtension extends ReactContextBaseJavaModule {
    public MyExtension(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "MyExtension";
    }

    @ReactMethod
    public void toast() {
        ExtensionModuleDemo activity = (ExtensionModuleDemo) getCurrentActivity();
        activity.toast();
    }


}
