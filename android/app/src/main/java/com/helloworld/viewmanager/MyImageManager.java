package com.helloworld.viewmanager;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;

import javax.annotation.Nullable;

/**
 * Created by jingdongqi on 16/9/20.
 */

public class MyImageManager extends SimpleViewManager<MyImageView> {
    public static final String REACT_CLASS = "MyImageView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected MyImageView createViewInstance(ThemedReactContext reactContext) {
        return new MyImageView(reactContext);
    }


    @ReactProp(name = "src")
    public void setSrc(MyImageView view, @Nullable String src) {
        view.setSource(src);
    }

    @ReactProp(name = "borderRadius", defaultFloat = 0f)
    public void setBorderRadius(MyImageView view, float borderRadius) {
        view.setBorderRadius(borderRadius);
    }

    @ReactProp(name = ViewProps.RESIZE_MODE)
    public void setResizeMode(MyImageView view, @Nullable String resizeMode) {
        view.setScaleType(resizeMode);
    }
}
